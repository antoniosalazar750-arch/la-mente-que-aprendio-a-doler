/**
 * CRM sencillo para las apps y landings de libros (Dani y Martha)
 * Un solo Google Sheet recibe: uso de las apps, contactos que se unen a la comunidad
 * y pedidos de ejemplares dedicados. Cada pedido avisa al autor por correo
 * (y, si se activa, por WhatsApp con CallMeBot).
 *
 * INSTALACIÓN (una sola vez, 10 minutos):
 * 1. Crea un Google Sheet nuevo (sheets.new) y llámalo "Libros Dani y Martha".
 *    Si Chrome ofrece traducir la página, di que NO.
 * 2. Extensiones > Apps Script. Borra lo que aparece y pega TODO este archivo.
 * 3. Llena la sección AVISOS de abajo con los correos de cada autor.
 * 4. Guarda. Elige la función "setup" y presiona Ejecutar. Autoriza los permisos.
 * 5. Elige la función "probarAvisos" y Ejecutar: a cada autor le debe llegar un aviso de prueba.
 * 6. Implementar > Nueva implementación > Aplicación web.
 *    Ejecutar como: Yo · Quién tiene acceso: Cualquier usuario. Copia la URL /exec.
 * 7. Pega esa URL en config.endpoint del contenido.js de CADA app (la misma URL en las dos).
 * 8. Comparte el Sheet con Dani y Martha (botón Compartir, como Editor) para que
 *    marquen el estado de cada pedido: Nuevo > Pagado > Enviado > Entregado.
 *
 * Si cambias algo de este código: Implementar > Administrar implementaciones >
 * lápiz > Versión: Nueva versión > Implementar. La URL no cambia.
 */

// ===== AVISOS: a quién avisar cuando llega un pedido de cada app =====
// La clave ("Dani", "Martha") debe ser igual a config.app en el contenido.js de cada app.
var AVISOS = {
  'Dani':   { correos: ['correo-de-dani@ejemplo.com'],   whatsapp: '', callmebotKey: '' },
  'Martha': { correos: ['correo-de-martha@ejemplo.com'], whatsapp: '', callmebotKey: '' }
};
// Copia de cada aviso para ti (opcional): ['tu-correo@gmail.com']
var COPIA = [];
// true = también avisar por correo cada vez que alguien se une a la comunidad
var AVISAR_CONTACTOS = false;

/* Aviso por WhatsApp (OPCIONAL) con CallMeBot, un servicio gratuito NO oficial:
 * 1. El autor guarda el número de CallMeBot que aparece en callmebot.com (sección WhatsApp)
 *    y le manda el mensaje de activación que indica la página.
 * 2. Recibe una "apikey". Ponla en callmebotKey y su número con 52 en whatsapp (ej. '523312345678').
 * Si algún día deja de funcionar, el correo y el Sheet siguen recibiendo todo. */

var APPS = Object.keys(AVISOS);
var C_EVENTOS = ['Fecha', 'App', 'Evento', 'Sesión', 'Origen', 'Nombre', 'WhatsApp', 'Resultado', 'Detalle'];
var C_PEDIDOS = ['Fecha', 'App', 'Pedido', 'Estado', 'Nombre', 'WhatsApp', 'Escribirle', 'Producto', 'Cantidad', 'Dedicatoria para', 'Mensaje', 'Entrega', 'Dirección', 'Notas'];
var C_CONTACTOS = ['Fecha', 'App', 'Nombre', 'WhatsApp', 'Escribirle', 'Resultado del test', 'Origen'];

function hoja(nombre, columnas) {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(nombre) || ss.insertSheet(nombre);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, columnas.length).setValues([columnas]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

function setup() {
  hoja('Eventos', C_EVENTOS);
  var p = hoja('Pedidos', C_PEDIDOS);
  var estados = SpreadsheetApp.newDataValidation().requireValueInList(['Nuevo', 'Pagado', 'Enviado', 'Entregado', 'Cancelado']).build();
  p.getRange('D2:D1000').setDataValidation(estados);
  hoja('Contactos', C_CONTACTOS);

  var ss = SpreadsheetApp.getActive();
  var r = ss.getSheetByName('Resumen') || ss.insertSheet('Resumen', 0);
  r.clear();
  var filas = [['Indicador'].concat(APPS)];
  function fila(t, f) { filas.push([t].concat(APPS.map(function (a) { return f(a); }))); }
  fila('Empezaron el test', function (a) { return '=COUNTIFS(Eventos!B:B,"' + a + '",Eventos!C:C,"inicio")'; });
  fila('Terminaron el test', function (a) { return '=COUNTIFS(Eventos!B:B,"' + a + '",Eventos!C:C,"resultado")'; });
  fila('Se unieron a la comunidad', function (a) { return '=COUNTIFS(Contactos!B:B,"' + a + '")'; });
  fila('Visitas a la landing', function (a) { return '=COUNTIFS(Eventos!B:B,"' + a + '",Eventos!C:C,"visita_landing")'; });
  fila('Pedidos dedicados', function (a) { return '=COUNTIFS(Pedidos!B:B,"' + a + '")'; });
  fila('Pedidos pagados o enviados', function (a) { return '=COUNTIFS(Pedidos!B:B,"' + a + '",Pedidos!D:D,"Pagado")+COUNTIFS(Pedidos!B:B,"' + a + '",Pedidos!D:D,"Enviado")+COUNTIFS(Pedidos!B:B,"' + a + '",Pedidos!D:D,"Entregado")'; });
  fila('Clic al libro del otro autor', function (a) { return '=COUNTIFS(Eventos!B:B,"' + a + '",Eventos!C:C,"clic_tienda*")+COUNTIFS(Eventos!B:B,"' + a + '",Eventos!C:C,"clic_landing_otro")'; });
  fila('Compartieron su resultado', function (a) { return '=COUNTIFS(Eventos!B:B,"' + a + '",Eventos!C:C,"compartir")'; });
  fila('Empezaron desde el QR', function (a) { return '=COUNTIFS(Eventos!B:B,"' + a + '",Eventos!C:C,"inicio",Eventos!E:E,"fil")'; });
  r.getRange(1, 1, filas.length, filas[0].length).setValues(filas);
  r.getRange(1, 1, 1, filas[0].length).setFontWeight('bold');
  r.autoResizeColumn(1);
}

function limpiar(v, max) {
  v = String(v == null ? '' : v).slice(0, max || 300);
  return /^[=+\-@]/.test(v) ? "'" + v : v; // evita inyección de fórmulas
}
function tel(v) {
  var d = String(v || '').replace(/\D/g, '').slice(-12);
  if (d.length === 10) d = '52' + d;
  return d;
}
function enlaceWa(d) { return d ? '=HYPERLINK("https://wa.me/' + d + '","Escribir")' : ''; }

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var d = JSON.parse(e.postData.contents || '{}');
    var app = limpiar(d.app, 40), w = tel(d.wa);
    var detalle = d.det || (d.pedido ? d.pedido : '');
    hoja('Eventos', C_EVENTOS).appendRow([new Date(), app, limpiar(d.ev, 40), limpiar(d.sid, 20), limpiar(d.src, 40),
      limpiar(d.nombre, 80), w ? "'" + w : '', limpiar(d.res, 80), limpiar(detalle)]);

    if (d.ev === 'registro') {
      hoja('Contactos', C_CONTACTOS).appendRow([new Date(), app, limpiar(d.nombre, 80), w ? "'" + w : '', enlaceWa(w), limpiar(d.res, 80), limpiar(d.src, 40)]);
      if (AVISAR_CONTACTOS) avisar(app, 'Nuevo integrante de la comunidad: ' + limpiar(d.nombre, 80),
        limpiar(d.nombre, 80) + ' se unió desde la app.\nResultado del test: ' + limpiar(d.res, 80) + '\nWhatsApp: https://wa.me/' + w);
    }

    if (d.ev === 'pedido') {
      var fila = [new Date(), app, limpiar(d.pedido, 20), 'Nuevo', limpiar(d.nombre, 80), w ? "'" + w : '', enlaceWa(w),
        limpiar(d.producto, 120), limpiar(d.cantidad, 5), limpiar(d.dedicatoria, 80), limpiar(d.mensaje, 240),
        limpiar(d.entrega, 20), limpiar(d.direccion, 240), ''];
      hoja('Pedidos', C_PEDIDOS).appendRow(fila);
      var texto = 'Nuevo pedido ' + fila[2] + '\n\n' +
        'Libro: ' + fila[7] + ' (x' + fila[8] + ')\n' +
        'Dedicatoria para: ' + fila[9] + '\n' +
        (fila[10] ? 'Mensaje: ' + fila[10] + '\n' : '') +
        'Entrega: ' + fila[11] + '\n' +
        (fila[12] ? 'Dirección: ' + fila[12] + '\n' : '') +
        '\nCliente: ' + fila[4] + '\n' +
        'Escríbele: https://wa.me/' + w + '\n\n' +
        'Cuando te pague, marca el pedido como "Pagado" en el Sheet.';
      avisar(app, 'Nuevo pedido dedicado ' + fila[2] + ': ' + fila[4], texto);
    }
  } catch (err) {
    // nunca interrumpe la app
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput('ok');
}

function avisar(app, asunto, texto) {
  var cfg = AVISOS[app] || {};
  var para = (cfg.correos || []).concat(COPIA).filter(function (c) { return c && c.indexOf('@ejemplo.com') < 0; });
  if (para.length) {
    try { MailApp.sendEmail({ to: para.join(','), subject: asunto, body: texto + '\n\nVer todo: ' + SpreadsheetApp.getActive().getUrl() }); } catch (e) {}
  }
  if (cfg.whatsapp && cfg.callmebotKey) {
    try {
      UrlFetchApp.fetch('https://api.callmebot.com/whatsapp.php?phone=' + cfg.whatsapp +
        '&text=' + encodeURIComponent(texto) + '&apikey=' + encodeURIComponent(cfg.callmebotKey), { muteHttpExceptions: true });
    } catch (e) {}
  }
}

function probarAvisos() {
  APPS.forEach(function (a) { avisar(a, 'Prueba de avisos (' + a + ')', 'Si te llegó este mensaje, los avisos de pedidos funcionan.'); });
}

function doGet() { return ContentService.createTextOutput('ok'); }

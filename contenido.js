/* CONTENIDO — "La mente que aprendió a doler", de Martha Lugo (WAS Editorial) */
window.APP = {
  config: {
    app: "Martha",          // nombre corto con el que se identifica esta app en el Sheet
    wa: "525571224272",
    endpoint: "",           // URL del Apps Script (la misma que en la app de Dani)
    comunidad: "",          // enlace del grupo o comunidad de WhatsApp de Martha
    registro: true,
    sitio: "la-mente-que-aprendio-a-doler.vercel.app",
    firmado: "libro.html#pedido",
    editorial: "https://waseditorial.com/bookstore/#!/La-mente-que-aprendio-a-doler/p/873558047",
    amz: "", ml: ""
  },

  libro: {
    titulo: "La mente que aprendió a doler",
    subtitulo: "Cómo sanar lo que el cerebro guarda y el alma elige sostener",
    autor: "Martha Lugo",
    autorCorto: "Martha",
    editorial: "WAS Editorial",
    portada: "libro.jpg",
    portadaCompacta: true,
    gancho: "Si alguna vez te has preguntado por qué repites los mismos miedos, relaciones o emociones, este libro puede darte una respuesta distinta.",
    fraseFinal: { t: "No soy la herida; soy la decisión que tomé frente a ella.", r: "Conclusión" },
    actos: [],
    evento: null
  },

  prensa: {
    medio: "Excélsior",
    fecha: "noviembre de 2026",
    titular: "Martha Lugo: transformar el dolor para volver a abrazar la vida",
    cita: "La mente aprende, pero aprende desde el dolor.",
    bio: "Martha es neurocoach certificada y asesora de imagen personal. En esta entrevista comparte la historia detrás del libro.",
    enlace: "https://www.excelsior.com.mx/nacional/martha-lugo-libro",
    boton: "Leer la entrevista en Excélsior"
  },

  acompanamiento: {
    kicker: "No lo hagas sola ni solo",
    titulo: "Únete a la comunidad de Martha",
    texto: "En la comunidad de WhatsApp Martha comparte cómo funciona tu mente, ejercicios para sanar y avisos de sus próximos talleres de neurociencia e imagen personal.",
    boton: "Entrar al grupo de WhatsApp",
    enviar: "Quiero unirme"
  },

  landing: {
    prefijo: "LM",
    titular: "La mente que aprendió a doler",
    bajada: "Si alguna vez te has preguntado por qué repites los mismos miedos, relaciones o emociones, este libro puede darte una respuesta distinta.",
    testBoton: "Haz el test del libro",
    paraQuien: [
      "Repites los mismos miedos, relaciones o emociones y no sabes por qué.",
      "Viviste abuso, una pérdida familiar o económica, o un cambio fuerte en tu relación.",
      "Cargas culpa por lo que viviste o por lo que decidiste.",
      "Cuidas a alguien que amas y que está enfermo.",
      "Quieres entender cómo la mente y la fe pueden trabajar juntas para sanar."
    ],
    historia: {
      titulo: "Martha vivió lo que hoy explica",
      parrafos: [
        "Alrededor de los 32 años, Martha Lugo sentía que su vida no tenía valor. Había vivido una maternidad temprana, el divorcio de sus padres, abuso sexual, crisis en su matrimonio, la pérdida de embarazos y problemas económicos, y no lograba ver hacia dónde la llevaba tanto dolor.",
        "A los 36 empezó un camino espiritual y de autoconocimiento que sigue recorriendo hoy. Aprendió a mirar lo que vivió sin dejar que eso definiera quién es, y descubrió que no necesita ser una mejor versión de sí misma para merecer amor ni paz.",
        "También acompañó a su esposo, Daniel, cuando tuvo que autorizar la amputación que le salvó la vida: la decisión más difícil de su vida, que atravesó sostenida por su fe.",
        "Asesora de imagen desde 2009 y neurocoach certificada desde 2021, en este libro une su historia con lo que la neurociencia explica de la mente y con su fe, para que dejes de mirarte solo a través de tu pasado."
      ]
    },
    cita: { t: "La mente aprende, pero aprende desde el dolor.", r: "Martha Lugo" },
    capitulosTitulo: "Algunos de los capítulos",
    capitulosIntro: "Cada capítulo une una parte de su historia con lo que la neurociencia explica y un ejercicio para ponerlo en práctica.",
    capitulos: [
      [1, "Del silencio a la culpa", "Cuando un recuerdo se revive como si siguiera ocurriendo."],
      [2, "Una madre adolescente", "La culpa que se queda aunque la historia ya cambió."],
      [3, "Modo supervivencia extrema", "Lo que pasa cuando crees lo que otros dijeron de ti."],
      [7, "De la pérdida al crecimiento", "Dejar de elegir desde el miedo y la carencia."],
      [8, "Fidel, la nueva normalidad", "Soltar el control y volver a la paz."]
    ],
    testTitulo: "¿Qué aprendió a sostener tu mente?",
    testTexto: "Tres minutos para descubrir qué capítulo es para ti hoy, con un ejercicio del libro.",
    pedidoTitulo: "Pide tu libro firmado y dedicado por Martha",
    pedidoTexto: "Martha lo dedica a mano para ti o para la persona que elijas, y te lo enviamos a donde estés.",
    precios: {
      uno: { precio: "", pago: "" },
      combo: { precio: "$710 envío incluido", pago: "" }
    },
    envio: "",
    entregaLocal: "En Guadalajara. Acordamos el lugar contigo por WhatsApp.",
    combo: {
      titulo: "Los dos libros: Martha y Daniel",
      texto: "La mente que aprendió a doler + Levántate de cualquier tacleada, ambos dedicados y con precio especial.",
      img: "libro-dani.jpg",
      otroTitulo: "Levántate de cualquier tacleada, de Daniel Macías",
      otroTexto: "Daniel, esposo de Martha, perdió una pierna y volvió a ponerse de pie. Su libro es el método que usó, contado desde la cancha.",
      enlace: "https://levantate-de-cualquier-tacleada.vercel.app/libro.html?utm_source=landing-martha",
      boton: "Conoce el libro de Daniel"
    },
    faq: [
      ["¿Cuánto cuesta el envío?", "Se envía por paquetería (Fedex o Estafeta) y cuesta alrededor de $130 a $150, según tu ciudad. Te confirmamos el total exacto por WhatsApp antes de pagar."],
      ["¿Cómo pago?", "Con tarjeta o transferencia a través de Mercado Pago. Te mandamos el enlace por WhatsApp junto con el total."],
      ["¿Cuánto tarda en llegar?", "Lo dedicamos y lo enviamos en cuanto se confirma tu pago. La paquetería tarda de 1 a 3 días hábiles."],
      ["¿Puedo regalarlo?", "Sí. Escribe el nombre de la persona en la dedicatoria y la dirección donde quieres que llegue."],
      ["¿Lo puedo comprar sin dedicatoria?", "Sí, en la tienda de WAS Editorial. El enlace está al final de esta página."]
    ],
    redes: [["Instagram", "https://www.instagram.com/marthalugoautora"]]
  },

  tienda: {
    kicker: "Del mismo equipo",
    titulo: "Lee también a Daniel Macías",
    texto: "Daniel, el esposo de Martha, perdió una pierna y volvió a ponerse de pie. En su libro comparte el método que usó, con la intensidad del futbol americano.",
    items: [
      { img: "libro-dani.jpg", titulo: "Levántate de cualquier tacleada", texto: "Test de 3 minutos: descubre qué te está tacleando hoy.", boton: "Hacer el test de Daniel", enlace: "https://levantate-de-cualquier-tacleada.vercel.app/?utm_source=app-martha", ev: "clic_tienda_dani" },
      { titulo: "Llévate los dos libros", texto: "La mente que aprendió a doler + Levántate de cualquier tacleada, dedicados y con precio especial.", boton: "Pedir los dos dedicados", enlace: "libro.html#pedido", ev: "clic_tienda_combo", secundario: true }
    ]
  },

  escena: "escena.jpg",
  logo: "flor-dorada.png",
  logoClaro: "flor-blanca.png",

  textos: {
    empezar: "Comenzar",
    resultado: "lo que tu mente aprendió a sostener es",
    caja1: "Hoy sostienes",
    caja2: "Hoy eliges",
    tarjeta: "Lo que mi mente aprendió a sostener",
    tarjeta2: "Lo que hoy elijo",
    ritualTitulo: "7 días para la mente y el espíritu",
    nota: "¿Qué historia te estás contando sobre ti que ya no es verdad?",
    firmado: "Pide tu ejemplar dedicado",
    notaIntro: "Un ejercicio de reflexión basado en el libro. No es un diagnóstico.",
    pieLegal: "Ejercicio de reflexión; no es un diagnóstico ni sustituye atención profesional."
  },

  etiquetas: { inicio: "La mente que aprendió a doler", preguntas: "Observa tu historia", resultado: "Comprende", ritual: "Ejercicios para la mente y el espíritu" },

  tema: { cielo1: "#0f1533", cielo2: "#2b2f63", cielo3: "#8f7fb5", fuerte: "#141a3a", acento: "#9a7420", suave: "#d9cde8", texto: "#1a1d3a", fondo: "#f6f3fa" },

  ritual: [
    ["Nombra lo que sostienes", "Escribe sin juzgarte: lo que mi mente aprendió a sostener es {nombreMin}. ¿Qué es lo que más me incomoda de esto?"],
    ["{tecnica} · 1", "{paso1}"],
    ["{tecnica} · 2", "{paso2}"],
    ["{tecnica} · 3", "{paso3}"],
    ["Tu certeza para el camino", "Cierra los ojos, pon una mano en tu corazón y lee en voz alta la certeza de tu resultado."],
    ["Lee el capítulo {cap}", "“{capTitulo}”. Subraya la frase que más te hable."],
    ["Descodifica tu verdadero ser", "Responde por escrito: ¿quién serías hoy si nunca hubieras creído que esa herida te definía?"]
  ],

  intro: {
    titulo: "¿Qué aprendió a sostener tu mente?",
    texto: "15 frases, tres minutos. Descubre el patrón que tu mente aprendió para sobrevivir y comienza a soltarlo con los ejercicios del libro.",
    verso: { t: "Hay heridas que el tiempo no borra, porque no viven en el pasado; viven en la forma en que aprendimos a mirarnos.", r: "Martha Lugo, La mente que aprendió a doler" }
  },

  escala: ["Nada", "Un poco", "Mucho, así soy yo"],

  resultados: {
    P: {
      nombre: "El surco del pasado", define: "Revivir un recuerdo como si siguiera ocurriendo",
      nace: "La libertad de elegir tu estado mental",
      cap: 1, capTitulo: "Del silencio a la culpa",
      reflexion: "Tu mente aprendió a sobrevivir repitiendo lo que dolió, como un camino que se marca de tanto pisarlo. Ese surco no es tu verdad: es un hábito que hoy puedes empezar a soltar.",
      cita: "No eres el resultado de la circunstancia en sí, sino el resultado de tu capacidad de sobrepasarla.",
      verso: { t: "Mediante tu perdón vuelves a recordar la verdad acerca de ti.", r: "Un curso de milagros, lección 62" },
      tecnica: { titulo: "El desasimiento de los surcos mentales", pasos: [
        "Elige tu estado mental: tienes el poder de elegir si seguir atrapado en tus propios pensamientos, recuerdos y dificultades, o soltarlos aquí y ahora. La elección siempre es tuya.",
        "Confronta la circunstancia: mira fijamente la situación y háblale a tu mente con autoridad: “Pasé por aquello, pero no me afirmo en eso. Ya no lo veo como una verdad en mí”.",
        "Afírmate en el ser: cada vez que el viejo pensamiento regrese, detén el diálogo interno y repite: “Soy amor, soy paz, soy paciencia, soy bondad, soy plenitud, soy luz”."] },
      audio: ""
    },
    C: {
      nombre: "La culpa", define: "Juzgarte todavía por lo que viviste o decidiste",
      nace: "Ver tu historia desde el amor",
      cap: 2, capTitulo: "Una madre adolescente",
      reflexion: "Tomaste decisiones con las herramientas que tenías. Seguir castigándote no corrige el pasado: solo te impide habitar el presente con paz.",
      cita: "Acepto todo cuanto ha llegado a mi vida. Mi historia no es un fin, es el principio de todo. Yo soy un pensamiento divino y hoy elijo amar quién soy en medio de lo que la vida me ha dado.",
      verso: null,
      tecnica: { titulo: "Tres pasos íntimos", pasos: [
        "El reencuentro: trae a tu mente esa parte de ti que un día se sintió frágil, asustada o sola, y recuérdale: “Ya traspasamos los hechos vividos; hoy ya no vives aquello que tuviste un día. Estás a salvo”.",
        "La corrección: identifica esa situación o error del pasado que todavía te genera culpa. Deja ir el juicio y recuérdate con ternura: “Esto no es una condena; es solo un instante de aprendizaje. Elijo cambiar mi percepción y ver esto desde el amor”.",
        "El tablero: mira tu circunstancia actual libre de drama y pregúntate: “Con lo que hoy tengo en las manos, ¿cuál es el movimiento más amoroso, creativo o divertido que puedo hacer para seguir creciendo?”."] },
      audio: ""
    },
    V: {
      nombre: "La valía herida", define: "Creer como verdad lo que otros dijeron de ti",
      nace: "Una valía que nada externo puede alterar",
      cap: 3, capTitulo: "Modo supervivencia extrema",
      reflexion: "Algunas palabras se quedaron grabadas tan hondo que empezaste a mirarte con ellas. Pero lo que otros dijeron de ti no define lo que eres.",
      cita: "Soy un ser que proviene de lo eterno, soy inmutable y solo puedo ver lo interno; mi fortaleza es que no dependo de condiciones externas; nada que Dios haya puesto en mí puede ser destruido ni alterado.",
      verso: null,
      tecnica: { titulo: "Elegir la voz correcta", pasos: [
        "Haz un alto en tu día y escucha de manera consciente las palabras que otras personas han dicho sobre ti y que has creído como una verdad en tu vida.",
        "Pregúntate: ¿cuáles de estas palabras que escuché son verdad y con cuáles elijo quedarme para fundamentar mi vida?",
        "Busca en tu diálogo interno la palabra que tenga el potencial suficiente para revertir la creencia que tenías de ti, y escríbela: “Hoy tengo claro que mi valía empieza en que…”."] },
      audio: ""
    },
    K: {
      nombre: "El control", define: "Sentir que tienes que resolverlo todo a solas",
      nace: "La paz de ser sostenido y guiado",
      cap: 8, capTitulo: "Fidel, la nueva normalidad",
      reflexion: "Has cargado tanto tiempo con todo que tu cuerpo ya no sabe descansar. Cuando dejas de luchar y de querer controlar, las cosas se vuelven mucho más sencillas.",
      cita: "Hoy le doy un descanso a mi cuerpo y retiro mi atención del mundo exterior. No tengo que resolverlo todo a solas; hoy me permito ser sostenido y guiado por el amor perfecto de mi Creador.",
      verso: { t: "Yo estaré con ustedes todos los días, hasta el fin del mundo.", r: "Mateo 28:20" },
      tecnica: { titulo: "Aliviar la carga y regresar a la paz", pasos: [
        "Calmar la sobrecarga física: reconoce que el estrés y el agotamiento ocurren cuando tu cuerpo obedece al miedo. Detente aquí y ahora, dale un respiro a tu cuerpo y permite que se relaje.",
        "Retirar la mirada de afuera: deja de intentar resolverlo todo allá afuera. Reconoce con honestidad que el conflicto aparente es solo un eco de tu necesidad de control. Aplica el perdón a la circunstancia y regresa a ti.",
        "Habitar la inocencia: vacía tu mente de expectativas y juicios; al abandonar la falsa necesidad del ego de tener la razón, entras en un espacio sagrado de quietud donde te abres a ser guiado por el Amor Perfecto."] },
      audio: ""
    },
    M: {
      nombre: "La lealtad al miedo", define: "Elegir y hablar desde el miedo y la carencia",
      nace: "El poder de elegir de nuevo",
      cap: 7, capTitulo: "De la pérdida al crecimiento",
      reflexion: "El miedo aprendió a hablar por ti: en tus decisiones, en tus palabras, en lo que esperas de la vida. No necesitas cambiar tu vida exterior, sino tu percepción.",
      cita: "El poder de elegir está en mis manos y ocurre en el presente. Hoy retiro mi lealtad al miedo, elijo al Espíritu Santo y decido usar mis palabras para construir la paz, la abundancia y el amor que verdaderamente soy.",
      verso: null,
      tecnica: { titulo: "El poder de elegir de nuevo", pasos: [
        "Retirar la lealtad: sin importar qué tan profundo sientas que has caído en el miedo o el conflicto, di con total convicción: “Hoy decido retirar mi lealtad al ego y elijo al Espíritu Santo. Abro la ventana a la corrección aquí y ahora”.",
        "El inventario honesto: escucha con atención la dirección de tus palabras en el día a día. ¿Qué estás declarando sobre tu vida, tu economía, tus relaciones y tu salud? ¿Te conducen hacia donde realmente quieres ir?",
        "La nueva declaración: pregúntate con absoluta honestidad qué sería lo primero que cambiarías hoy en tu forma de hablar si supieras con total certeza que lo que dices se cumple."] },
      audio: ""
    }
  },

  reactivos: [
    ["P", "Hay un recuerdo que vuelve a mi mente una y otra vez."],
    ["C", "Hay algo de mi pasado por lo que todavía me juzgo."],
    ["V", "Palabras que me dijeron hace años todavía pesan en cómo me veo."],
    ["K", "Siento que tengo que resolverlo todo a solas."],
    ["M", "Tomo decisiones importantes desde el miedo o la carencia."],
    ["P", "Ciertas situaciones me hacen reaccionar como si volviera a vivir lo mismo."],
    ["C", "Cuando algo sale mal, lo primero que pienso es que fue mi culpa."],
    ["V", "En el fondo dudo de mi valor para los demás."],
    ["K", "Cuando algo se sale de mi control, mi cuerpo se tensa y no puedo descansar."],
    ["M", "Lo que digo sobre mi vida, mi dinero o mi salud suele ser negativo."],
    ["P", "Siento que repito los mismos miedos, relaciones o emociones."],
    ["C", "Me cuesta recordar ciertas decisiones sin sentir vergüenza."],
    ["V", "Me cuesta creer que merezco cosas buenas."],
    ["K", "Busco respuestas afuera y me agoto intentando arreglarlo todo."],
    ["M", "Me cuesta escuchar mi voz interior entre tanto ruido."]
  ],

  credito: { texto: "App creada por Antonio Salazar", link: "¿Quieres una para tu libro?", enlace: "https://tu-libro-en-una-app.vercel.app/" }
};

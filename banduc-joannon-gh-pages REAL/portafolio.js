var trabajos = [{
    figure: "media/Trabajo pais.png",
    alt: "Descripción de la imagen",
    title: "Trabajo País",
    about: "Imagen, difusión y merchandising de trabajos voluntarios",
    url: "https://www.instagram.com/trabajopais/"
}, {
    figure: "media/trabajo-03-homy.png",
    alt: "Descripción de la imagen",
    title: "PAD",
    about: "Examen final Taller Producto 2018",
    url: "https://drive.google.com/file/d/1XTXHG0P4cHXwQANPqzSyvqv05HRSXAbc/view?usp=sharing"
}, {
    figure: "media/OxxoFlex.png",
    alt: "Descripción de la imagen",
    title: "OXXOFLEX",
    about: "Mobiliario para campus univestario Lo Contador",
    url: "https://drive.google.com/drive/folders/1_Qb_siCvSXMNLJ1jRifgGXZ74P3q9WNF?usp=sharing"
}, {
    figure: "media/Gretsch.png",
    alt: "Descripción de la imagen",
    title: "Gretsch",
    about: "Modelado 3D guitarra electrica",
    url: "https://drive.google.com/file/d/1kk-Hy0cy9pTu_BbpXOlP1jJF08gEKWEy/view?usp=sharing"
}, {
    figure: "media/Pass.png",
    alt: "Descripción de la imagen",
    title: "Pass",
    about: "Proyecto Ilko/Virutex, artefacto de cocina sofisticada",
    url: "https://drive.google.com/file/d/1iFSp75a5NJPRnTbTdmXY3tNZiUKwSmWf/view?usp=sharing"
}, {
    figure: "media/Merengoza 1.png",
    alt: "Descripción de la imagen",
    title: "Merengoza",
    about: "Desarrollo de productos gastronomicos identitarios",
    url: "https://drive.google.com/file/d/1hLFjxzqQFpAKuJ_uXGZ92SQvm2731vkY/view?usp=sharing"
}, {
    figure: "media/YesoElastico.png",
    alt: "Descripción de la imagen",
    title: "Yeso Elastico",
    about: "Exploración de nuevas propiedades del material del yeso",
    url: "https://drive.google.com/file/d/1khULR8BgE1VECgy8PLpCnOHqx6mYG5Dd/view?usp=sharing"
}, {
    figure: "media/Cabless.png",
    alt: "Descripción de la imagen",
    title: "Cabless",
    about: "Proyecto de Gestion de diseño para produccion industrial",
    url: "https://drive.google.com/file/d/1Byco9XXROZkvws2Rj1Sem2AzvjRUc9SJ/view?usp=sharing"
}, {
    figure: "media/Ilko.png",
    alt: "Descripción de la imagen",
    title: "Campaña 50 años",
    about: "Proyecto Ilko/Virutex, 50 años del tostador estañado",
    url: "https://drive.google.com/file/d/129FfzFyLSENlKSkOWSKaBLMpS9-krl3o/view?usp=sharing"
}, {
    figure: "media/Easy.png",
    alt: "Descripción de la imagen",
    title: "Easy iron",
    about: "Proyecto enfocado en reducir la domesticidad, plancha sin plancha",
    url: "https://drive.google.com/file/d/1UezCONSnzTkEfASQrI53Ncsfba9zeLkI/view?usp=sharing"
}, {
    figure: "media/Muriel.png",
    alt: "Descripción de la imagen",
    title: "Muriel",
    about: "Mobiliario experimental para campus universitario",
    url: "https://drive.google.com/file/d/1unHVPbI5KOXKke6Oy17SbLB2xVBROGr6/view?usp=sharing"
}, {
    figure: "media/Guaca.png",
    alt: "Descripción de la imagen",
    title: "Comedero Zoonanimal",
    about: "Comedero para guacamayos del zoologico metropolitano",
    url: "https://drive.google.com/file/d/12jlb-V2Xph01JeYFIAdfWnl4SWQOw2Ps/view"
},{
    figure: "media/Dagan.png",
    alt: "Descripción de la imagen",
    title: "Dagán",
    about: "Protector de heladas para huertos de autoconsumo",
    url: "https://drive.google.com/drive/folders/1C1CS4U0H5GZCpTqljt5wTRzHck2xYoBT?usp=sharing"
}, {
    figure: "media/Grik.gif",
    alt: "Descripción de la imagen",
    title: "Grik",
    about: "Exploración en identidad gastronomica",
    url: "https://drive.google.com/file/d/1V-3UrH45v_gtzfaXqsrB7PuZ0lnyqSRT/view?usp=sharing"


}];
/* LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE */
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '">Ver más</a><p>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});

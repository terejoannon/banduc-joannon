var trabajos = [{
    figure: "media/trabajo-01-desfile.png",
    alt: "Descripción de la imagen",
    title: "MUP", 
    about: "Examen final Taller Identidad"
}, {
    figure: "media/trabajo-02-app.png",
    alt: "Descripción de la imagen",
    title: "Desarrollo de App movil",
    about: "Aplicación movil en desarrollo"
}, {
    figure: "media/trabajo-03-homy.png",
    alt: "Descripción de la imagen",
    title: "PAD",
    about: "Examen final Taller Producto 2018"
}, {
    figure: "media/OxxoFlex.png",
    alt: "Descripción de la imagen",
    title: "OXXOFLEX",
    about: "Mobiliario para campus univestario Lo Contador"
}, {
    figure: "media/Gretsch.png",
    alt: "Descripción de la imagen",
    title: "Gretsch",
    about: "Modelado 3D guitarra electrica"
}, {
    figure: "media/Pass.png",
    alt: "Descripción de la imagen",
    title: "Pass",
    about: "Insumo profesional de gastronomia"
}, {
    figure: "media/Merengoza 1.png",
    alt: "Descripción de la imagen",
    title: "Merengoza",
    about: "Desarrollo de productos gastronomicos identitarios"
}, {
    figure: "media/Jabon.png",
    alt: "Descripción de la imagen",
    title: "Moon",
    about: "Experimentación de propiedades fisicas de la parafina sólida"

}, {
    figure: "media/YesoElastico.png",
    alt: "Descripción de la imagen",
    title: "Yeso Elastico",
    about: "Exploración de nuevas propiedades del material del yeso"
}, {
    figure: "media/Cabless.png",
    alt: "Descripción de la imagen",
    title: "Cabless",
    about: "Proyecto de Gestion de diseño para produccion industrial"
}, {
    figure: "media/Ilko.png",
    alt: "Descripción de la imagen",
    title: "Campaña 50 años",
    about: "Proyecto ilko/virutex, 50 años del ostador estañado"
}, {
    figure: "media/Easy.png",
    alt: "Descripción de la imagen",
    title: "Easy iron",
    about: "Proyecto enfocado en reducir la domesticidad, plancha sin plancha"
}, {
    figure: "media/Muriel.png",
    alt: "Descripción de la imagen",
    title: "Muriel",
    about: "Mobiliario experimental para campus universitario"
}, {
    figure: "media/Guaca.png",
    alt: "Descripción de la imagen",
    title: "Comedero Zoonanimal",
    about: "Comedero para guacamayos del zoologico metropolitano"
}, {
    figure: "media/Grik.gif",
    alt: "Descripción de la imagen",
    title: "Grik",
    about: "Exploración en identidad gastronomica"


}];
/* LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE */
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "https://drive.google.com/drive/folders/1mn9eFkvHURN8-dgMArkq_Xx8LsXPiJOg">Ver más</a><p>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});

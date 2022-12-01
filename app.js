const express = require('express');
const app = express();
 
const port = 3001;

//Motor de plantillas
 app.set('view engine', 'ejs');
//Desarrollo de motores de plantillas
 app.set('views', __dirname + '/views');

//middleware
 app.use(express.static(__dirname + "/public"));


app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: "404",
        descripcion: "Titulo del sitio web"
    });
});
 
app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);
});

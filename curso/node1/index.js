//Esto es un servidor basico

const express = require('express'); //Requerir expres, requiriendo un modulo "HTTP"
//Cuando lo ejecutas, te devuelve un OBJETO
const morgan = require('morgan'); //NPM MORGAN PARA OBTENER INFORMACION O LOGEAR 



const app = express(); // Que es un servidor, esto lo guardas en una constante.

//MIDLELWARE, PROCESA DATOS ANTES DE QUE LLEGUE A LA RUTA, PUEDEN VALIDAR DATOS 
function loger (req, res, next) {
console.log(`Route  Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
next()
}

//SETTINGS
app.set('appName', 'Hola bebe');
app.set('port', 3000);
app.set("view engine", 'ejs')


//MIDELWARE
app.use(express.json())
app.use(morgan('dev'))



// app.all('/user', (req, res, next) => { //Por aqui pasan todos los links antes de lml
//   console.log("Por aqui paso")
//   // res.send("End")
//   next()
// })


//ESTA ES UNA RUTA "ROUTES"
app.get('/', (req, res) => {
  const data = [{name: "pa"},{name: "pe"}, {name: "pepe"}]
  res.render('index.ejs', {data})
})



app.get('/user', (req, res, next)=>{ //Cuando el servidor reciba un metodo get, ejecuta algo
  res.json({
    username: "cameron",
    lastName: "ppppppp"
  } );  //Res(respuesta).send (senra enviar algo)
});

app.post("/user/:id", (req, res, next) => {
  console.log(req.body)
  console.log(req.params)
  res.send("<h1>POST</h1> "); 
});


app.put("/user/:id", (req, res, next) => {
  console.log(req.body);
  res.send( `User ${req.params.id} Ok`);
});



app.delete("/user/:id ", (req, res, next) => {
  console.log(req.params) 
  res.send(`User  ${req.params.id} deleted`);
});


//MIDELWARE
app.use(express.static('views'));


app.listen(app.get("port"), () =>{ //Donde lo estas ejecutando, donde lo escuchas?
  console.log(`server on PORT ${app.get("port")}`);
});

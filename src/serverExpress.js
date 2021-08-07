// const express = require("express");

// const app = express();

// app.get("/", (req, res, next) => {
//   res.send('<h1 style= "color:blue" > bienvenido a express </h1>');
// });

// const arr = [];
// app.get("/productos", (req, res, next) => {
//   async function getAll() {
//     const read = await fs.promises.readFile("../pruebas.txt", "utf-8");
//     try {
//       const contenidoParse = JSON.parse(read);
//       arr.push(contenidoParse);
//       console.log(arr);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   getAll();

//   res.send(`la cantidad de visitas es ${arr}`);
// });

// app.get("/prodcutoRandom", (req, res, next) => {
//   let obj = new Date().toLocaleDateString("es-AR");
//   res.send(`la fecha es  ${obj}`);
// });

// const PORT = 3001;

// const server = app.listen(PORT, () => {
//   console.log(`servidor express corriendo en port ${PORT}`);
// });

// server.on("error", (erro) => console.log(error));

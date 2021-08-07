// class Usuario {
//   constructor(nombre, apellido, libros, mascotas) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.libros = libros;
//     this.mascotas = mascotas;
//   }
//   getFullName() {
//     console.log(`${this.nombre} ${this.apellido}`);
//   }

//   addMascota(namePet) {
//     this.mascotas.push(namePet);
//   }
//   countMascotas(cantPet) {
//     cantPet = this.mascotas.length;
//     console.log("la cantidad de mascotas es: ", cantPet);
//   }
//   addBook(nombre, autor) {
//     this.libros.push({ nombre: nombre, autor: autor });
//   }
//   getBook() {
//     const array1 = [];
//     for (let data of this.libros) {
//       array1.push(data.nombre);
//     }
//     console.log("nombre de los libros: ", array1);
//   }
// }

// let persona = new Usuario(
//   "brian",
//   "schmidt",
//   [
//     { nombre: "Lord of ring", autor: "J. R. R. Tolkien" },
//     { nombre: "harry potter", autor: "J. K. Rowling" },
//   ],
//   ["perro", "pato", "gato"]
// );
// persona.getFullName();
// persona.addMascota("tortuga");
// persona.countMascotas();
// persona.addBook("game of thrones", "George R. R. Martin");
// persona.getBook();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// const fs = require("fs");

// class Contenedor {
//   constructor() {}

//   static async save(title, price) {
//     const arr = [];
//     const read = await fs.promises.readFile("pruebas.txt", "utf-8");
//     try {
//       if (read.length !== 0) {
//         const contenidoParse = JSON.parse(read);
//         let aux = { title: title, price: price, id: contenidoParse.length };
//         contenidoParse.push(aux);
//         console.log("contenidoArray", contenidoParse);
//         fs.writeFile("pruebas.txt", JSON.stringify(contenidoParse), (error) => {
//           if (error) {
//             console.log("error");
//           }
//         });
//       } else {
//         let aux = { title: title, price: price, id: 0 };
//         arr.push(aux);
//         console.log("arr2", arr);
//         fs.writeFile("pruebas.txt", JSON.stringify(arr), (error) => {
//           if (error) {
//             console.log("error");
//           }
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   static async getAll() {
//     const read = await fs.promises.readFile("pruebas.txt", "utf-8");
//     try {
//       const contenidoParse = JSON.parse(read);
//       console.log("contenidoP", contenidoParse);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   static async getById(obj) {
//     const read = await fs.promises.readFile("pruebas.txt", "utf-8");
//     try {
//       const contenidoParse = JSON.parse(read);
//       console.log(contenidoParse);
//       const filteredData = contenidoParse.filter((x) => x.id === obj);
//       console.log("getByID", filteredData);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   static async deleteAll() {
//     const write = await fs.promises.writeFile("pruebas.txt", "", (error) => {
//       if (error) {
//         console.log("error");
//       }
//     });
//   }

//   static deleteById(obj) {
//     fs.readFile("pruebas.txt", "utf-8", (error, contenido) => {
//       const arr = [];
//       const contenidoParse = JSON.parse(contenido);
//       const filteredData = contenidoParse.filter((x) => x.id !== obj);
//       arr.push(filteredData);
//       fs.writeFile("pruebas.txt", JSON.stringify(arr), (error) => {
//         if (error) {
//           console.log("error");
//         }
//       });
//     });
//   }
// }

// Contenedor.save("pc3", "1003");

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// date.
// npm i moment
// npm i nodemon -D
// const moment = require("moment");

// const hoy = moment();

// console.log(hoy);

// const bDate = moment("26/03/1996", "DD/MM/YYYY");
// console.log(bDate);

// const diferencia = hoy.diff(bDate, "years");
// console.log(diferencia);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// servidor express

const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res, next) => {
  res.send('<h1 style= "color:blue" > bienvenido a express </h1>');
});

app.get("/productos", (req, res, next) => {
  async function getAll() {
    const read = await fs.promises.readFile("pruebas.txt", "utf-8");
    try {
      const contenidoParse = JSON.parse(read);

      res.send(contenidoParse);
    } catch (err) {
      console.log(err);
    }
  }

  getAll();
});

app.get("/productoRandom", (req, res, next) => {
  async function getRamdon() {
    const read = await fs.promises.readFile("pruebas.txt", "utf-8");
    try {
      const contenidoParse = JSON.parse(read);
      const aleatorio =
        contenidoParse[Math.floor(Math.random() * contenidoParse.length)];
      console.log("aleatorio", aleatorio);
      res.send(aleatorio);
    } catch (err) {
      console.log(err);
    }
  }
  getRamdon();
});

const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`servidor express corriendo en port ${PORT}`);
});

server.on("error", (erro) => console.log(error));

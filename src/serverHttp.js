const http = require("http");
const moment = require("moment");

const server = http.createServer((req, res) => {
  const horaActual = moment().hours();
  if (horaActual >= 6 && horaActual < 12) {
    res.end("buenos dias");
  } else if (horaActual >= 12 && horaActual <= 17) {
    res.end("buenas tardes");
  }
});

const PORT = 3000;

const connectedServer = server.listen(PORT, () => {
  console.log(` Servido escuchando en HTTP puerto ${PORT}`);
});

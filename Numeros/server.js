import express from 'express';
import RouterNumeros from './router/numerosRouter.js';

class Server {
  #port = null;
  #router = null;

  constructor(port) {
    this.#port = port;
    this.#router = new RouterNumeros().config();
  }

  start() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
    app.use('/', this.#router);
    app.use('/numeros', this.#router);
    app.get('/numeros', (req, res) => res.sendFile('index.html', { root: './public' }));

    const server = app.listen(this.#port, () =>
      console.log(`Servidor escuchando en http://localhost:${this.#port}/numeros`)
    );
    server.on('error', err => console.error(`Error en servidor: ${err.message}`));
  }
}

export default Server;

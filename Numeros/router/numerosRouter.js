import ControllerNumeros from "../controller/numerosController.js";
import express from 'express';

class RouterNumeros {
  #router = express.Router();
  #controller = new ControllerNumeros();

  config() {
    this.#router.post("/entrada", this.#controller.agregarNumero);
    this.#router.get("/entrada", this.#controller.obtenerNumeros);
    this.#router.get("/promedio", this.#controller.obtenerPromedio);
    this.#router.get("/minmax", this.#controller.obtenerMinMax);
    this.#router.get("/cantidad", this.#controller.obtenerCantidad);
    return this.#router;
  }
}

export default RouterNumeros;
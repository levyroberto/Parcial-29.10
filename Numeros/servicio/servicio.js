import ModeloMem from '../model/ModeloMem.js';

class ServicioNumeros {
  #modelo = null;

  constructor() {
    this.#modelo = new ModeloMem();
  }

  async agregarNumero(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
      throw new Error('El campo "numero" debe ser un número válido.');
    }
    return await this.#modelo.guardarNumero(numero);
  }

  async obtenerNumeros() {
    return await this.#modelo.obtenerNumeros();
  }

  async obtenerPromedio() {
    return await this.#modelo.obtenerPromedio();
  }

  async obtenerMinMax() {
    return await this.#modelo.obtenerMinMax();
  }

  async obtenerCantidad() {
    return await this.#modelo.obtenerCantidad();
  }
}

export default ServicioNumeros;

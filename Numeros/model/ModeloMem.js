class ModeloMem {
  constructor() {
    this.numeros = [];
  }

  async guardarNumero(numero) {
    this.numeros.push(numero);
    return numero;
  }

  async obtenerNumeros() {
    return this.numeros;
  }

  async obtenerPromedio() {
    if (this.numeros.length === 0) return 0;
    const total = this.numeros.reduce((a, b) => a + b, 0);
    return total / this.numeros.length;
  }

  async obtenerMinMax() {
    if (this.numeros.length === 0) return { min: null, max: null };
    return {
      min: Math.min(...this.numeros),
      max: Math.max(...this.numeros),
    };
  }

  async obtenerCantidad() {
    return this.numeros.length;
  }
}

export default ModeloMem;

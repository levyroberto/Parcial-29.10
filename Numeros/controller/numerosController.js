import ServicioNumeros from '../servicio/servicio.js';
import { validarNumero } from '../servicio/validacion/validar.js';
const servicio = new ServicioNumeros();


class ControllerNumeros {
  agregarNumero = async (req, res) => {
    try {
      const { result, error } = validarNumero(req.body);
      if (!result) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const num = Number(req.body.numero);
      const nuevo = await servicio.agregarNumero(num);
      res.status(201).json({ message: `Número [${nuevo}] agregado` });

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  obtenerNumeros = async (req, res) => {
    const numeros = await servicio.obtenerNumeros();
      if (numeros.length === 0) {
        return res.status(200).json({
          message: "No hay valores registrados todavía."
        });
      }
    res.json({ numeros });
  };

  obtenerPromedio = async (req, res) => {
    const promedio = await servicio.obtenerPromedio();
    res.json({ promedio });
  };

  obtenerMinMax = async (req, res) => {
    const { min, max } = await servicio.obtenerMinMax();

    if (min === null && max === null) {
      return res.status(200).json({
        message: "No hay valores registrados todavía."
      });
    }
    res.json({ min, max });
  };

  obtenerCantidad = async (req, res) => {
    const cantidad = await servicio.obtenerCantidad();
    res.json({ cantidad });
  };

  mostrarNumeros = async (req, res) => {
    const numeros = await servicio.obtenerNumeros();
    res.status(200).json({ numeros });
  };
}

export default ControllerNumeros;

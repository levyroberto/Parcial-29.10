import Joi from "joi";

export const validarNumero = body => {
  const schema = Joi.object({
    numero: Joi.number().required().messages({
      'any.required': 'El campo "numero" es obligatorio.',
      'number.base': 'El campo numero debe ser en formato JSON.'
    })
  });

  const { error } = schema.validate(body, { convert: false });
  if (error) return { result: false, error };
  return { result: true };
};
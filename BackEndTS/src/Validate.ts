import joi from 'joi';
const schema = joi.object({
    name: joi.string().min(3).max(200).required().messages({
        'string.empty': 'Campo Nome não pode estar vazio!',
        'string.min': 'Campo Nome deve ter pelo menos 3 caracteres!',
        'any.required': 'Campo Name é obrigatório'
    }),
    email: joi.string().email().required().messages({
        'string.email': 'O campo Email deve ser um email válido!',
        'any.required': 'O campo Email é obrigatório!'
    }),
    age: joi.number().integer().min(18).max(100).required().messages({
        'number.base': 'Idade deve ser um número!',
        'number.min': 'Idade deve ser no mínimo 18 anos!',
        'number.max': 'Idade deve ser no máximo 100 anos',
        'any.required': 'O campo Age é obrigatório!'
    }),
});

export default schema;
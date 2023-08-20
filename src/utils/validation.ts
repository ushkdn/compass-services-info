import { body } from 'express-validator'

export const validation = [
  body('appointment.interval')
    .notEmpty()
    .withMessage('Поле должно быть целым числом')
    .isInt({ min: 2, max: 1439 })
    .withMessage('Поле должно быть больше 1 и меньше 1440'),
  body('price').notEmpty().withMessage('Поле должно содержать числовой тип').isNumeric(),
]

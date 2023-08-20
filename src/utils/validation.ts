import { body } from 'express-validator'

export const validation = [
  body('price').isNumeric().withMessage('Цена должна иметь числовой тип'),
  body('appointment.interval').isInt({ min: 1, max: 1440 }).withMessage('Промежуток должен быть от 1 до 1440 минут'),
]

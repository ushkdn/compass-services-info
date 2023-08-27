import { body } from 'express-validator'

export const createServiceValidation = [
  body('name').notEmpty().withMessage('Поле name является обязательным'),
  body('description').notEmpty().withMessage('Поле name является обязательным'),
  body('price').isNumeric().withMessage('Цена должна иметь числовой тип'),
  body('appointment.interval').isInt({ min: 1, max: 1440 }).withMessage('Промежуток должен быть от 1 до 1440 минут'),
  body('appointment.timeStart')
    .isISO8601()
    .withMessage('Поле timeStart должно иметь временной тип')
    .custom((value, { req }) => {
      if (value >= req.body.appointment.timeEnd) {
        throw new Error('Значение поля timeStart должно быть меньше, чем значение поля timeEnd')
      }
      return true
    }),
  body('appointment.timeEnd').isISO8601().withMessage('Поле timeStart должно иметь временной тип'),
]

export const updateServiceValidation = [
  body('name').notEmpty().withMessage('Поле name является обязательным').optional(),
  body('description').notEmpty().withMessage('Поле name является обязательным').optional(),
  body('price').isNumeric().withMessage('Цена должна иметь числовой тип').optional(),
  body('appointment.interval')
    .isInt({ min: 1, max: 1440 })
    .withMessage('Промежуток должен быть от 1 до 1440 минут')
    .optional(),
  body('appointment.timeStart')
    .optional()
    .isISO8601()
    .withMessage('Поле timeStart должно иметь временной тип')
    .custom((value, { req }) => {
      if (value >= req.body.appointment.timeEnd) {
        throw new Error('Значение поля timeStart должно быть меньше, чем значение поля timeEnd')
      }
      return true
    }),
  body('appointment.timeEnd').isISO8601().withMessage('Поле timeEnd должно иметь временной тип').optional(),
]

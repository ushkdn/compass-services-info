import { body } from 'express-validator'

export const createBookingValidation = [
  body('dateStart')
    .isISO8601()
    .withMessage('Поле dateStart должно иметь временной тип')
    .custom((value, { req }) => {
      if (value >= req.body.dateEnd) {
        throw new Error('Значение поля dateStart должно быть меньше, чем значение поля dateEnd')
      }
      return true
    }),
  body('dateEnd').isISO8601().withMessage('Поле dateEnd должно иметь временной тип'),
]

export const updateBookingValidation = [
  body('dateStart')
    .isISO8601()
    .withMessage('Поле dateStart должно иметь временной тип')
    .custom((value, { req }) => {
      if (value >= req.body.dateEnd) {
        throw new Error('Значение поля dateStart должно быть меньше, чем значение поля dateEnd')
      }
      return true
    })
    .optional(),
  body('dateEnd').isISO8601().withMessage('Поле dateEnd должно иметь временной тип').optional(),
]

import { body } from 'express-validator'

export const createBookingValidation = [
  body('dateStart')
    .notEmpty()
    .withMessage('Поле dateStart должно иметь временной тип')
    .matches(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)
    .withMessage('Неправильный формат даты, необходимый формат: YYYY/MM/DD HH:MM:SS')
    .custom((value, { req }) => {
      if (value >= req.body.dateEnd) {
        throw new Error('Значение поля dateStart должно быть меньше, чем значение поля dateEnd')
      }
      return true
    }),
  body('dateEnd')
    .notEmpty()
    .withMessage('Поле dateEnd должно иметь временной тип')
    .matches(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)
    .withMessage('Неправильный формат даты, необходимый формат: YYYY/MM/DD HH:MM:SS'),
]

export const updateBookingValidation = [
  body('dateStart')
    .notEmpty()
    .withMessage('Поле dateStart должно иметь временной тип')
    .matches(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)
    .withMessage('Неправильный формат даты, необходимый формат: YYYY/MM/DD HH:MM:SS')
    .custom((value, { req }) => {
      if (value >= req.body.dateEnd) {
        throw new Error('Значение поля dateStart должно быть меньше, чем значение поля dateEnd')
      }
      return true
    })
    .optional(),
  body('dateEnd')
    .notEmpty()
    .withMessage('Поле dateEnd должно иметь временной тип')
    .matches(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)
    .withMessage('Неправильный формат даты, необходимый формат: YYYY/MM/DD HH:MM:SS')
    .optional(),
]

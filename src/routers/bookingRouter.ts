import handleValidationErrors from '../utils/handleValidationErrors.js'
import bookingController from '../controllers/bookingController.js'
import * as validation from '../utils/bookingValidation.js'
import { Router } from 'express'

const bookingRouter = Router()

bookingRouter.post(
  '/:serviceId/booking',
  validation.createBookingValidation,
  handleValidationErrors,
  bookingController.create,
)
bookingRouter.get('/:serviceId/booking/:bookingId', handleValidationErrors, bookingController.getOne)
bookingRouter.get('/:serviceId/booking', handleValidationErrors, bookingController.getAll)
bookingRouter.patch('/:serviceId/booking/:bookingId', handleValidationErrors, bookingController.update)
bookingRouter.delete('/:serviceId/booking/:bookingId', handleValidationErrors, bookingController.remove)

export default bookingRouter

import handleValidationErrors from '../utils/handleValidationErrors.js'
import bookingController from '../controllers/bookingController.js'
import { Router } from 'express'

const bookingRouter = Router()

bookingRouter.post('/service/:serviceId/appointment/booking', handleValidationErrors, bookingController.create)
bookingRouter.get(
  '/service/:serviceId/appointment/booking/:bookingId',
  handleValidationErrors,
  bookingController.getOne,
)
bookingRouter.get('/service/:serviceId/appointment/booking', handleValidationErrors, bookingController.getAll)
bookingRouter.patch(
  '/service/:serviceId/appointment/booking/:bookingId',
  handleValidationErrors,
  bookingController.update,
)
bookingRouter.delete(
  '/service/:serviceId/appointment/booking/:bookingId',
  handleValidationErrors,
  bookingController.remove,
)

export default bookingRouter
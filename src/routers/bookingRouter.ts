import handleValidationErrors from '../utils/handleValidationErrors.js'
import bookingController from '../controllers/bookingController.js'
import { Router } from 'express'

const bookingRouter = Router()

bookingRouter.post('/:serviceId/appointment/booking', handleValidationErrors, bookingController.create)
bookingRouter.get('/:serviceId/appointment/booking/:bookingId', handleValidationErrors, bookingController.getOne)
bookingRouter.get('/:serviceId/appointment/booking', handleValidationErrors, bookingController.getAll)
bookingRouter.patch('/:serviceId/appointment/booking/:bookingId', handleValidationErrors, bookingController.update)
bookingRouter.delete('/:serviceId/appointment/booking/:bookingId', handleValidationErrors, bookingController.remove)

export default bookingRouter

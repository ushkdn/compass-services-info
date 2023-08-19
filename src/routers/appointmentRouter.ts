import handleValidationErrors from '../utils/handleValidationErrors.js'
import appointmentController from '../controllers/appointmentController.js'
import { Router } from 'express'

const appointmentRouter = Router()

appointmentRouter.post('/service/:serviceId/appointment', handleValidationErrors, appointmentController.create)
appointmentRouter.get('/service/:serviceId/appointment', handleValidationErrors, appointmentController.getOne)
appointmentRouter.get('/service/:serviceId/appointment', handleValidationErrors, appointmentController.getAll)
appointmentRouter.patch('/service/:serviceId/appointment', handleValidationErrors, appointmentController.update)
appointmentRouter.delete('/service/:serviceId/appointment', handleValidationErrors, appointmentController.remove)

export default appointmentRouter

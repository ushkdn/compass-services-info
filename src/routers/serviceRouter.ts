import handleValidationErrors from '../utils/handleValidationErrors.js'
import serviceController from '../controllers/serviceController.js'
import { Router } from 'express'

const serviceRouter = Router()

serviceRouter.post('/service', handleValidationErrors, serviceController.create)
serviceRouter.get('/service/:serviceId', handleValidationErrors, serviceController.getOne)
serviceRouter.get('/service', handleValidationErrors, serviceController.getAll)
serviceRouter.patch('/service/:serviceId', handleValidationErrors, serviceController.update)
serviceRouter.delete('/service/:serviceId', handleValidationErrors, serviceController.remove)

export default serviceRouter

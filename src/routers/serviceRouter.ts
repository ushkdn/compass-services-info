import handleValidationErrors from '../utils/handleValidationErrors.js'
import serviceController from '../controllers/serviceController.js'
import { validation } from '../utils/validation.js'
import { Router } from 'express'
const serviceRouter = Router()

serviceRouter.post('/', validation, handleValidationErrors, serviceController.create)
serviceRouter.get('/:serviceId', handleValidationErrors, serviceController.getOne)
serviceRouter.get('/', handleValidationErrors, serviceController.getAll)
serviceRouter.patch('/:serviceId', handleValidationErrors, serviceController.update)
serviceRouter.delete('/:serviceId', handleValidationErrors, serviceController.remove)

export default serviceRouter

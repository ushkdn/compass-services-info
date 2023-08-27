import handleValidationErrors from '../utils/handleValidationErrors.js'
import serviceController from '../controllers/serviceController.js'
import * as validation from '../utils/serviceValidation.js'
import { Router } from 'express'
const serviceRouter = Router()

serviceRouter.post('/', validation.createServiceValidation, handleValidationErrors, serviceController.create)
serviceRouter.get('/:serviceId', handleValidationErrors, serviceController.getOne)
serviceRouter.get('/', handleValidationErrors, serviceController.getAll)
serviceRouter.patch('/:serviceId', validation.updateServiceValidation, handleValidationErrors, serviceController.update)
serviceRouter.delete('/:serviceId', handleValidationErrors, serviceController.remove)

export default serviceRouter

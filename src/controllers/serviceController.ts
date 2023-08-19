import { Request, Response } from 'express'
import { IService } from '../interfaces/serviceInterface.js'
import serviceService from '../services/serviceService.js'

class serviceController {
  async create(req: Request, res: Response) {
    try {
      const serviceData = req.body
      const createdService: IService = await serviceService.create(serviceData)
      res.status(200).json(createdService)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Ошибка создания информации об услугах' })
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      const service: IService = await serviceService.getOne(serviceId)
      res.status(200).json(service)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Ошибка получения информации об услуге' })
    }
  }
  async getAll(res: Response) {
    try {
      const services: IService[] = await serviceService.getAll()
      res.status(200).json(services)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Ошибка получения информации об услугах' })
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      const serviceData = req.body
      const updatedService: IService = await serviceService.update(serviceId, serviceData)
      res.status(200).json(updatedService)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Ошибка обновления информации об услуге' })
    }
  }
  async remove(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      await serviceService.remove(serviceId)
      res.status(500).json({ message: 'Информация об услуге успешно удалена' })
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось удалить информацию об услуге' })
    }
  }
}
export default new serviceController()

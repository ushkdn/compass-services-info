import { Request, Response } from 'express'
import { IBooking } from '../interfaces/bookingInterface.js'
import bookingService from '../services/bookingService.js'

class bookingController {
  async create(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      const bookingData = req.body
      const booking = await bookingService.create(serviceId, bookingData)
      res.status(200).json(booking)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось создать запись' })
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const { serviceId, bookingId } = req.params
      const booking = await bookingService.getOne(serviceId, bookingId)
      res.status(200).json(booking)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось получить информацию о записи' })
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      const bookings: IBooking[] = await bookingService.getAll(serviceId)
      res.status(200).json(bookings)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось получить информацию о записях' })
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { serviceId, bookingId } = req.params
      const bookingData = req.body
      const updatedBooking: IBooking = await bookingService.update(serviceId, bookingId, bookingData)
      res.status(200).json(updatedBooking)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось обновить информацию о записи' })
    }
  }
  async remove(req: Request, res: Response) {
    try {
      const { serviceId, bookingId } = req.params
      await bookingService.remove(serviceId, bookingId)
      res.status(200).json({ message: 'Информация о записи успешно удалена' })
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось удалить информацию о записи' })
    }
  }
}
export default new bookingController()

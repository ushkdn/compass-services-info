import { IAppointment } from '../interfaces/appointmentInterface.js'
import { Request, Response } from 'express'
import appointmentService from '../services/appointmentService.js'

class appointmentController {
  async create(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      const appointmentData = req.body
      const appointment: IAppointment = await appointmentService.create(serviceId, appointmentData)
      res.status(200).json(appointment)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось создать информацию о встрече' })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      const appointment: IAppointment = await appointmentService.getOne(serviceId)
      res.status(200).json(appointment)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось получить информацию о встрече' })
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      const appointments: IAppointment = await appointmentService.getOne(serviceId)
      res.status(200).json(appointments)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось получить информацию о встрече' })
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      const appointmentData = req.body
      const updatedAppointment: IAppointment = await appointmentService.update(serviceId, appointmentData)
      res.status(200).json(updatedAppointment)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось обновить информацию о встрече' })
    }
  }
  async remove(req: Request, res: Response) {
    try {
      const { serviceId } = req.params
      await appointmentService.remove(serviceId)
      res.status(200).json({ message: 'Информация о встрече успешно удалена' })
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось удалить информацию о встрече' })
    }
  }
}
export default new appointmentController()

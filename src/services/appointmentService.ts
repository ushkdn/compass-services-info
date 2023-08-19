import { IService } from '../interfaces/serviceInterface.js'
import serviceModel from '../models/serviceModel.js'
import { createAppointmentDto } from '../dtos/appointmentDTOS/createAppointmentDto.js'
import { updateAppointmentDto } from '../dtos/appointmentDTOS/updateAppointmentDto.js'

class appointmentService {
  async create(serviceId: string, appointmentData: createAppointmentDto) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    if (!appointmentData) {
      throw new Error('Ошибка заполнения информации о встрече')
    }
    const service = await serviceModel.findById(serviceId)
    service.appointment = appointmentData
    await service.save()
    return appointmentData
  }
  async getOne(serviceId: string) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    const service: IService = await serviceModel.findById(serviceId)
    return service.appointment
  }
  async getAll(serviceId: string) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    const service: IService = await serviceModel.findById(serviceId)
    return service.appointment
  }
  async update(serviceId: string, updatedAppointment: updateAppointmentDto) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    if (!updatedAppointment) {
      throw new Error('Ошибка заполнения информации о встрече')
    }
    const service = await serviceModel.findById(serviceId)
    service.appointment.timeStart = updatedAppointment.timeStart
    service.appointment.timeEnd = updatedAppointment.timeEnd
    await service.save()
    return service.appointment
  }
  async remove(serviceId: string) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    const service = await serviceModel.findById(serviceId)
    service.appointment = undefined
    await service.save()
  }
}
export default new appointmentService()

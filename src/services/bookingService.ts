import { IBooking } from '../interfaces/bookingInterface.js'
import serviceModel from '../models/serviceModel.js'
import { createBookingDto } from '../dtos/bookingDTOS/createBookingDto.js'
import { updateBookingDto } from '../dtos/bookingDTOS/updateBookingDto.js'
import { IService } from '../interfaces/serviceInterface.js'

class bookingService {
  async create(serviceId: string, bookingData: createBookingDto) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    const service = await serviceModel.findById(serviceId)
    service.appointment.booking.push(bookingData)
    await service.save()
    return bookingData
  }
  async getOne(serviceId: string, bookingId: string) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    if (!bookingId) {
      throw new Error('Такая запись не найдена')
    }
    const service: IService = await serviceModel.findById(serviceId)
    const booking: IBooking = service.appointment.booking.find((booking) => booking._id.toString() === bookingId)
    return booking
  }
  async getAll(serviceId: string) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    const service: IService = await serviceModel.findById(serviceId)
    return service.appointment.booking
  }
  async update(serviceId: string, bookingId: string, updatedBooking: updateBookingDto) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    if (!bookingId) {
      throw new Error('Такая запись не найдена')
    }
    if (!updateBookingDto) {
      throw new Error('Ошибка заполнения информации о записи')
    }
    const service = await serviceModel.findById(serviceId)
    const bookingIndex = service.appointment.booking.findIndex((booking) => booking._id.toString() === bookingId)
    service.appointment.booking[bookingIndex].dateStart = updatedBooking.dateStart
    service.appointment.booking[bookingIndex].dateEnd = updatedBooking.dateEnd
    await service.save()
    return service.appointment.booking[bookingIndex]
  }
  async remove(serviceId: string, bookingId: string) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    if (!bookingId) {
      throw new Error('Такая запись не найдена')
    }
    const service = await serviceModel.findById(serviceId)
    const bookingIndex = service.appointment.booking.findIndex((booking) => booking._id.toString() === bookingId)
    service.appointment.booking.splice(bookingIndex, 1)
    await service.save()
  }
}
export default new bookingService()

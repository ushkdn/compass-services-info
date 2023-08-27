import { IBooking } from '../interfaces/bookingInterface.js'
import serviceModel from '../models/serviceModel.js'
import { createBookingDto } from '../dtos/bookingDtos/createBookingDto.js'
import { updateBookingDto } from '../dtos/bookingDtos/updateBookingDto.js'
import { IService } from '../interfaces/serviceInterface.js'

class bookingService {
  async create(serviceId: string, bookingData: createBookingDto) {
    const service = await serviceModel.findById(serviceId)
    if (!service) {
      throw new Error('Такая услуга не найдена')
    }
    service.appointment.booking.push(bookingData)
    await service.save()
    return bookingData
  }
  async getOne(serviceId: string, bookingId: string) {
    const service: IService = await serviceModel.findById(serviceId)
    if (!service) {
      throw new Error('Такая услуга не найдена')
    }
    const bookingIndex = service.appointment.booking.findIndex((booking) => booking._id.toString() === bookingId)

    if (!service.appointment.booking[bookingIndex]) {
      throw new Error('Такая запись не найдена')
    }
    const booking: IBooking = service.appointment.booking.find((booking) => booking._id.toString() === bookingId)
    return booking
  }
  async getAll(serviceId: string) {
    const service: IService = await serviceModel.findById(serviceId)
    if (!service) {
      throw new Error('Такая услуга не найдена')
    }
    return service.appointment.booking
  }
  async update(serviceId: string, bookingId: string, updatedBooking: updateBookingDto) {
    const service = await serviceModel.findById(serviceId)
    if (!service) {
      throw new Error('Такая услуга не найдена')
    }
    const bookingIndex = service.appointment.booking.findIndex((booking) => booking._id.toString() === bookingId)
    if (!service.appointment.booking[bookingIndex]) {
      throw new Error('Такая запись не найдена')
    }
    service.appointment.booking[bookingIndex].dateStart = updatedBooking.dateStart
    service.appointment.booking[bookingIndex].dateEnd = updatedBooking.dateEnd
    await service.save()
    return service.appointment.booking[bookingIndex]
  }
  async remove(serviceId: string, bookingId: string) {
    const service = await serviceModel.findByIdAndUpdate(serviceId, {
      $pull: { 'appointment.booking': { _id: bookingId } },
    })
    await service.save()
  }
}
export default new bookingService()

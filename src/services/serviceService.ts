import serviceModel from '../models/serviceModel.js'
import { createServiceDto } from '../dtos/serviceDtos/createSeviceDto.js'
import { updateServiceDto } from '../dtos/serviceDtos/updateServiceDto.js'

class serviceService {
  async create(service: createServiceDto) {
    if (!service) {
      throw new Error('Ошибка заполнения информации об услуге')
    }
    return await serviceModel.create(service)
  }
  async getOne(serviceId: string) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    return await serviceModel.findById(serviceId)
  }
  async getAll() {
    return await serviceModel.find()
  }
  async update(serviceId: string, service: updateServiceDto) {
    if (!service) {
      throw new Error('Ошибка заполнения информации об услуге')
    }
    return await serviceModel.findByIdAndUpdate(serviceId, service, { new: true })
  }
  async remove(serviceId: string) {
    if (!serviceId) {
      throw new Error('Такая услуга не найдена')
    }
    return await serviceModel.findByIdAndDelete(serviceId)
  }
}
export default new serviceService()

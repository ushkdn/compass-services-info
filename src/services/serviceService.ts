import serviceModel from '../models/serviceModel.js'
import { createServiceDto } from '../dtos/serviceDtos/createSeviceDto.js'
import { updateServiceDto } from '../dtos/serviceDtos/updateServiceDto.js'

class serviceService {
  async create(service: createServiceDto) {
    return await serviceModel.create(service)
  }
  async getOne(serviceId: string) {
    const service = await serviceModel.findById(serviceId)
    if (!service) {
      throw new Error('Такая услуга не найдена')
    }
    return await serviceModel.findById(serviceId)
  }
  async getAll() {
    return await serviceModel.find()
  }
  async update(serviceId: string, updatedService: updateServiceDto) {
    const service = await serviceModel.findById(serviceId)
    if (!service) {
      throw new Error('Такая услуга не найдена')
    }
    return await serviceModel.findByIdAndUpdate(serviceId, updatedService, { new: true })
  }
  async remove(serviceId: string) {
    const service = await serviceModel.findById(serviceId)
    if (!service) {
      throw new Error('Такая услуга не найдена')
    }
    return await serviceModel.findByIdAndDelete(serviceId)
  }
}
export default new serviceService()

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
    return service
  }
  async getAll() {
    return await serviceModel.find()
  }
  async update(serviceId: string, updatedService: updateServiceDto) {
    const service = await serviceModel.findById(serviceId)
    if (!service) {
      throw new Error('Такая услуга не найдена')
    }
    for (let key in updatedService) {
      if (key == 'appointment') {
        for (let value in updatedService[key]) {
          service[key][value] = updatedService[key][value]
        }
      } else {
        service[key] = updatedService[key]
      }
    }
    service.save()
    return service
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

import { Schema, model } from 'mongoose'
import appointmentSchema from './appointmentSchema.js'
import { IService } from '../interfaces/serviceInterface.js'

const serviceSchema = new Schema<IService>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  appointment: {
    type: appointmentSchema,
  },
})

export default model('service', serviceSchema)

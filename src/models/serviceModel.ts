import { Schema, model } from 'mongoose'
import appointmentSchema from './appointmentSchema.js'
import { IService } from '../interfaces/serviceInterface.js'

const serviceSchema = new Schema<IService>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true,
  },
  appointment: {
    type: appointmentSchema,
  },
})

export default model('service', serviceSchema)

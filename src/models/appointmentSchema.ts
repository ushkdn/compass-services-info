import { Schema } from 'mongoose'
import bookingSchema from './bookingSchema.js'
import { IAppointment } from '../interfaces/appointmentInterface.js'

const appointmentSchema = new Schema<IAppointment>({
  interval: {
    type: Number,
  },
  timeStart: {
    type: Date,
    required:true,
  },
  timeEnd: {
    type: Date,
    required:true,
  },
  booking: {
    type: [bookingSchema],
  },
})

export default appointmentSchema

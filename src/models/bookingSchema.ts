import { Schema } from 'mongoose'
import { IBooking } from '../interfaces/bookingInterface.js'

const bookingSchema = new Schema<IBooking>({
  dateStart: {
    type: Date,
    required:true,
  },
  dateEnd: {
    type: Date,
    required:true,
  },
  clientId: {
    type: Number,
    required:true,
  },
})
export default bookingSchema

import { Schema } from 'mongoose'
import { IBooking } from '../interfaces/bookingInterface.js'

const bookingSchema = new Schema<IBooking>({
  dateStart: {
    type: Date,
  },
  dateEnd: {
    type: Date,
  },
  clientId: {
    type: Number,
  },
})
export default bookingSchema

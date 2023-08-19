import { IBooking } from './bookingInterface.js'

export interface IAppointment {
  interval: number
  timeStart: Date
  timeEnd: Date
  booking?: IBooking[]
}

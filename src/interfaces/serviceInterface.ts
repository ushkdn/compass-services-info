import { IAppointment } from './appointmentInterface.js'

export interface IService {
  name: string
  description: string
  price: number
  appointment: IAppointment
}

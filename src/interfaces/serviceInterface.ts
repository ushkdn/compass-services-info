import { IAppointment } from './appointInterface.js'

export interface IService {
  name: string
  description: string
  price: number
  appointment: IAppointment
}

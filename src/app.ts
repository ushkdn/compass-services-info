import 'dotenv/config'
import express from 'express'
import { connect } from 'mongoose'
import serviceRouter from './routers/serviceRouter.js'
import appointmentRouter from './routers/appointmentRouter.js'
import bookingRouter from './routers/bookingRouter.js'
const app = express()
app.use(express.json())
app.use('/api', [serviceRouter, appointmentRouter, bookingRouter])

const PORT = process.env.PORT || 7856
const MONGODB = process.env.MONGODB_URL

connect(MONGODB)
  .then(() => {
    console.log('mongoDB connected!')
    app.listen(PORT, () => {
      try {
        console.log(`Server started on port - ${PORT}`)
      } catch (err) {
        console.log('Server error! - ', err)
      }
    })
  })
  .catch((err) => console.log('mongoDB error!', err))

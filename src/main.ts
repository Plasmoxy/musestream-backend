import { createApp } from "./app"
import dotenv from 'dotenv'

// load environment variables from .env
dotenv.config() 

// --- Main ---
// Create app and start it on port.
createApp()
.then(app => {
  const PORT = process.env.PORT ?? 80
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
    console.log("--------------------------------")
  })
})
.catch(async (e) => {
  console.log(e)
})
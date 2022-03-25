import express from 'express'
import cors from 'cors'

export async function createApp() {
    console.log('MuseStream backend')
    console.log('Petrik a Novak - MTAA Projekt')
    console.log('--------------------------------')

    // create express app
    const app = express()
    app.use(express.json())
    app.use(cors())
    
    // homepage
    app.get('/', async (req, res) => {
        res.send("<html><body><h1>MuseStream server running</h1></body></html>")
    })
    
    // API routing
    
    
    return app
}

import "dotenv/config"
import { connect } from 'mongoose'


const dbConnect = async() => {
    const DB_URI = process.env.DB_URI
    await connect(DB_URI as string)
}

export default dbConnect
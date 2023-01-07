import { Storage } from "../interfaces/storage.interface"
import StorageModel from "../models/storage"


const registerUpload = async({fileName, idUser, path}:Storage) => {
    const responseStorage = await StorageModel.create({fileName, idUser, path})
    return responseStorage
}

export {
    registerUpload
}
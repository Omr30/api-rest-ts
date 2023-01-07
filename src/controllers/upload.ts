import { Response } from "express"
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage";
import {handleHttp} from '../utils/error.handle';



const getFile = async (req: RequestExt, res: Response) => {
    try {
        const {user, file} = req
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const responseFile = await registerUpload(dataToRegister)
        res.json(responseFile)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_IBLOG')
    }
}


export {
    getFile
}
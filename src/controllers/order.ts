import { Response } from "express"
import { RequestExt } from "../interfaces/req-ext"
import { handleHttp } from "../utils/error.handle"


const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.json({
            msg: 'Esto solo lo ve las personas con session / JWT',
            user: req.user
        })
    } catch (error) {
        handleHttp(res, 'ERROR_GET_IBLOG')
    }
}


export {
    getItems
}
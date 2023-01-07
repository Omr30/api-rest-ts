import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { handleHttp } from "../utils/error.handle"

interface RequestExt extends Request{
    user?: string | JwtPayload
}

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
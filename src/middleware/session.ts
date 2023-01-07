import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";


const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || null
        const jwt = jwtByUser?.split(' ').pop()
        const isUser = verifyToken(`${jwt}`) as { id: string }
        if (!isUser) {
            res.status(401).json({
                msg: 'NO_TIENES_UN_JWT_VALIDO'
            })
        }else {
            req.user = isUser
            next();
        }
    }catch(error){
        console.log(error);
        res.status(400).json({
            msg: 'SESSION_NO_VALIDA'
        })
    }
}

export {
    checkJwt
}
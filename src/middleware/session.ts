import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request{
    user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || null
        const jwt = jwtByUser?.split(' ').pop()
        const isUser = verifyToken(`${jwt}`)
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
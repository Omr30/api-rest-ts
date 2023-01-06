import { NextFunction, Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const header = req.headers["user-agent"]
    console.log(header);
    next();
}

export {
    logMiddleware
}
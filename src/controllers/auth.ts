import { Request, Response } from "express"
import { loginUser, registrarNewUser } from "../services/auth"

const registerCtrl = async({body}: Request, res: Response) => {
    const responseUser = await registrarNewUser(body)
    res.json(responseUser)
}

const loginCtrl = async({body}: Request, res: Response) => {
    const responseUser = await loginUser(body)
    res.json(responseUser)
}

export {
    registerCtrl,
    loginCtrl
}
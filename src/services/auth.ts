import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registrarNewUser = async({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email})
    if(checkIs) return "ALREADY_USER"

    const encryptPass = await encrypt(password)
    const registerNewUser = await UserModel.create({email, password: encryptPass, name})

    return registerNewUser
}

const loginUser = async({email, password}:Auth) => {
    const checkIs = await UserModel.findOne({email})
    if(!checkIs) return "NOT_FOUND_USER"

    const passwordHash = checkIs.password
    const comparePass = await verified(password, passwordHash)

    if(!comparePass) return "PASSWORD_INCORRECT"

    const token = generateToken(checkIs.email)
    const data = {
        token,
        user: checkIs
    }
    return data
}

export {
    registrarNewUser,
    loginUser
}

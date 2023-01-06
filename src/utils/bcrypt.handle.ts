import { hash, compare } from 'bcryptjs'


const encrypt = async(password: string) => {
    const passwordHash = await hash(password, 8)
    return passwordHash
}

const verified = async(password: string, passHash: string) => {
    const compareHash = await compare(password, passHash )
    return compareHash
}

export {
    encrypt,
    verified
}
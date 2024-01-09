import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const passphrase = process.env.API_KEY
const SALT_ROUNDS = 8

export const getJwtTokenFromValue = (value: any) => {
    return jwt.sign(value, passphrase as string)
}

export const getValueFromJwt = (token: string) => {
    const result = jwt.verify(token, passphrase as string)
    return result

}

/* Password handling */
export const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, SALT_ROUNDS)
}

export const comparePassword = (tryPassword: string, hashedPassword: string) => {
    return bcrypt.compare(tryPassword, hashedPassword, (err, result) => {
        if (err) {
            throw err
        }
        return result
    })
}

/* Encode and Decode can be used to implement encrypt/decrypt methods */

const base64Encode = (cipher: string) => {
    const result = Buffer.from(cipher).toString('base64')
    return result;
}

const base64Decode = (cipher: string) => {
    const result = Buffer.from(cipher, 'base64').toString('ascii')
    return result;
}
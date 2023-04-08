import jwt from 'jsonwebtoken'

const passphrase = process.env.API_KEY

export const getJwtTokenFromValue = (value: any) => {
    return jwt.sign(value, passphrase as string)
}

export const getValueFromJwt = (token: string) => {
    const result = jwt.verify(token, passphrase as string)
    return result

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
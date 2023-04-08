import { ErrorBody, MessageBody, LogBody, SourceBody, MetadataBody, log } from '../lib/logging'
import { BetterError, AdditionalInfo } from '../lib/errors'
import { hostname } from 'os'

// Placeholder values for the instance ID and IP address while their calls are being made
let instanceId = 'The instance ID has not been retrieved yet'
let ipAddress = 'The IP address has not been retrieved yet'

// In order to retrieve the instance ID and IP address, two separate calls must be made to the AWS metadata service
// Here we resolve the promises from those two calls and assign them to their appropriate variables
if (process.env.NODE_ENV === 'production') {
    //
}

const formatLogMessage = (message: MessageBody | BetterError): MessageBody | ErrorBody => {
    if (message instanceof BetterError) {
        return {
            httpMessage: message.httpMessage,
            httpStatus: message.httpStatus,
            errMessage: message.errMessage,
            errCode: message.errCode
        }
    }

    return message
}

const createLogBody = (message: MessageBody | BetterError, moduleName: string): LogBody => {
    return {
        requestId: "",
        class: message instanceof BetterError ? message.moduleName : moduleName,
        msg: formatLogMessage(message)
    }
}
const createSourceBody = (): SourceBody => {
    return {
        sourceName: hostname(),
        instanceId: process.env.NODE_ENV === 'production' ? instanceId : 'local',
        ipAddress: process.env.NODE_ENV === 'production' ? ipAddress : 'local',
        awsRegion: process.env.AWS_REGION || 'AWS Region unavailable',
        env: process.env.NODE_ENV || 'Node environment unavailable'
    }
}

const createMetadataBody = (): MetadataBody => {
    const metadata = {}
    const attributes = { userName: { value: "" }, userEmail: { value: "" }, cognitoUsername: { value: "" } }

    if (!attributes) {
        return metadata
    }

    if (attributes.userName && attributes.userName.value) {
        // @ts-ignore
        metadata.userName = attributes.userName.value
    }

    if (attributes.userEmail && attributes.userEmail.value) {
        // @ts-ignore
        metadata.userEmail = attributes.userEmail.value
    }

    if (attributes.cognitoUsername && attributes.cognitoUsername.value) {
        // @ts-ignore
        metadata.cognitoUsername = attributes.cognitoUsername.value
    }

    return metadata
}

export const info = (message: MessageBody, moduleName: string, additionalInfo?: AdditionalInfo) =>
    log('info', createLogBody(message, moduleName), additionalInfo, createSourceBody(), createMetadataBody())

export const warn = (message: MessageBody, moduleName: string, additionalInfo?: AdditionalInfo) =>
    log('warn', createLogBody(message, moduleName), additionalInfo, createSourceBody(), createMetadataBody())

export const error = (message: BetterError, moduleName: string, additionalInfo?: AdditionalInfo) =>
    log('error', createLogBody(message, moduleName), additionalInfo, createSourceBody(), createMetadataBody())

export const fatal = (message: BetterError, moduleName: string, additionalInfo?: AdditionalInfo) =>
    log('fatal', createLogBody(message, moduleName), additionalInfo, createSourceBody(), createMetadataBody())
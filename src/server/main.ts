// use this file for setting up app and router
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
const helmet = require('koa-helmet')

// @ts-ignore
import cors from '@koa/cors'

// Modules
import { errorEmitter, errorHandler } from '../middleware'

export const app = new Koa()
const router = new Router()

// Health check
router.get('/', (ctx: Koa.Context) => {
    ctx.body = {
        message: 'WORKING'
    }
})

app.use(helmet.xssFilter())
// app.use(requestSanitizationMiddleware)

app
    .use(errorEmitter)

    .use(cors())
    .use(bodyParser({ jsonLimit: '50mb' }))
    .use(router.routes())
    .use(router.allowedMethods())
    .on('error', errorHandler)
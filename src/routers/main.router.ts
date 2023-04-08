import { Context } from 'koa'
import Router from 'koa-router'
import fs from 'fs'

import { authMiddleware } from '../middleware'
/* IMPORT ROUTERS BELOW */

const router = new Router({
    prefix: '/v1'
})

router.get('/', (ctx: Context) => {
    ctx.body = {
        message: 'WORKING'
    }
})

router.get('/health', (ctx: Context) => {
    ctx.body = {
        message: 'HEALTHY'
    }
})

router.get('/version', (ctx: Context) => {
    const version = fs.readFileSync(__dirname + '/version.txt', 'utf-8')

    ctx.body = {
        message: 'HEALTHY',
        version
    }
})

router
    .use(authMiddleware)
    /*  
    add routers here
    .use(AdminRouter.routes())
    .use(AdminRouter.allowedMethods())
    */

export default router
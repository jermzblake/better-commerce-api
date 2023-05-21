import { Context } from 'koa'
import Router from 'koa-router'
import fs from 'fs'

import { authMiddleware } from '../middleware'
/* IMPORT ROUTERS BELOW */
import ProductRouter from './product/product.router'
import OrderRouter from './order/order.router'

const router = new Router({
    prefix: '/api'
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
   .use(ProductRouter.routes())
   .use(ProductRouter.allowedMethods())
   .use(OrderRouter.routes())
   .use(OrderRouter.allowedMethods())

export default router
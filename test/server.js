const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const request = require('request-promise-native');
const bodyParser = require('koa-bodyparser');
const koaProxy = require('../koa-proxy');

app.use(bodyParser());

app.use(koaProxy({
    proxyPath: '/your-proxy'
}));

router
    .get('/health-check', async ctx => {
        ctx.body = 'alive';
    })
;

app
    .use(router.routes())
    .use(router.allowedMethods());

let server = app.listen(4455);

module.exports = server;
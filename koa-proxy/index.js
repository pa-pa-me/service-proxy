'use strict';
const request = require('request-promise-native');

module.exports = function (opts) {
    opts = opts || {
        proxyPath: '/proxy'
    };

    return async function koaProxy(ctx, next) {
        if (ctx.path === opts.proxyPath && ctx.method === 'POST') {
            ctx.body = await request(ctx.request.body);
        } else {
            await next();
        }
    };
};

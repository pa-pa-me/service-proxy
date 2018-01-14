# service-proxy
Client side service-proxy to call api across domains

# install
```
npm install koa-service-proxy
```

# reference server side
```
const koaProxy = require('koa-service-proxy/koa-proxy');

app.use(koaProxy({
    proxyPath: '/proxy'
}));
```

# client side 
```
import proxy from 'koa-service-proxy';

proxy.proxyTo({
    body: {
        uri: 'http://www.baidu.com'
    }
});
```

# Run test
```
git clone https://github.com/pa-pa-me/service-proxy.git
cd service-proxy
npm install 
npm test
```
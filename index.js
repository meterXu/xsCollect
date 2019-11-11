const Koa = require('koa');
const app = new Koa();
const router = require('./router/index');
const koaBody = require('koa-body');
const userParams = require('./common/userParams');
var cors = require('koa-cors');
app.use(koaBody());
app.use(cors());
app.use(async (ctx, next) => {
    console.log(`${new Date()}`,`${ctx.method}`,`${ctx.url}`);
    await next();
});
app.use(router.routes());

if(userParams.port&&parseInt(userParams.port)!==NaN){
    console.log(`service started at http://localhost:${userParams.port}`);
    app.listen(userParams.port);
}else{
    let port = 11525;
    console.log(`service started at http://localhost:${port}`);
    app.listen(port);
}


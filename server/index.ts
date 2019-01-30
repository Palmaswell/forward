const Koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const Router = require('koa-router');
const next = require('next');
const fs = require('fs');
const os = require('os');
const path = require('path');
const uuid = require('uuid/v3');
const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(logger());
  server.use(koaBody({ multipart: true }));

  router.get('/', async (ctx) => {
    // const reader = fs.createReadStream(path.resolve('.forward'));
    console.log(ctx.res, '^^^^^^^^');
    await handle(ctx.req, ctx.res);
  });

  router.get('*', async (ctx) => await handle(ctx.req, ctx.res));

  server.use(async (ctx, next) => {
    if (ctx.method === 'POST') {
      const file = ctx.request.files.file;
      const reader = fs.createReadStream(file.path);
      const stream = fs.createWriteStream('./.forward');
      reader.pipe(stream);
      console.log(`💾  uploading ${file.name} to disk`);

    }
    ctx.res.statusCode = 200;
    return await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`▲ Ready on http://localhost:${port}`)
  });
});

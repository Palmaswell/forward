import Cookie from 'js-cookie';

export const getCookie = (cookieName: string, ctx?: {req: { cookies } }) => {
  if (process.browser) {
    return Cookie.get(cookieName);
  } else {
    return ctx.req.cookies ? ctx.req.cookies[cookieName] : null;
  }
}

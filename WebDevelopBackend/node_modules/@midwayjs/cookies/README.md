# Midway Cookies

Extends [pillarjs/cookies](https://github.com/pillarjs/cookies) and Egg Cookies to adapt koa and serverless with some additional features.

More encryption than the original version, using a more secure aes-256-gcm algorithm.

## Encrypt

@midwayjs/cookies provide an alternative `encrypt` mode like `signed`. An encrypt cookie's value will be encrypted base on keys. Anyone who don't have the keys are unable to know the original cookie's value.

```ts
import * as Cookies from '@midwayjs/cookies');
ctx.cookies = new Cookies(ctx, keys[, defaultCookieOptions]);
ctx.cookies.set('foo', 'bar', { encrypt: true });
ctx.cookies.get('foo', { encrypt: true });
```

**Note: you should both indicating in get and set in pairs.**

## Set cookie

Set a cookie through `cookies.set(key, value, options)`. The parameters supported by options are:

- path - The valid path of the `String` cookie, the default is `/`.
- domain - The valid domain name range of `String` cookie, the default is `undefined`.
- expires - the expiration time of the `Date` cookie.
- maxAge - the maximum valid time of the `Number` cookie. If maxAge is set, the value of expires will be overwritten.
- secure - Whether `Boolean` is only transmitted in an encrypted channel. Note that if the request is http, it is not allowed to be set to true. If https is automatically set to true.
- httpOnly - `Boolean` If set to true, the browser is not allowed to read the value of this cookie.
- overwrite - `Boolean` If set to true, repeatedly writing the same key on a request will overwrite the previous value written, the default is false.
- signed - Whether `Boolean` needs to sign the cookie or not, the signed parameter needs to be passed when cooperating with get. At this time, the front-end cannot tamper with the cookie. The default is true.
- encrypt - Whether `Boolean` needs to encrypt the cookie, you need to pass the encrypt parameter when using get. At this time, the front-end cannot read the real cookie value, and the default is false.
- partitioned - Whether `Boolean` sets cookies for independent partition state ([CHIPS](https://developers.google.com/privacy-sandbox/3pcd/chips)). Note that this configuration will only take effect if 'secure' is true.
- removeUnpartitioned - `Boolean` Whether to delete the cookie with the same name in the non-independent partition state. Note that this configuration will only take effect when `partitioned` is true.
- priority - `String` sets the [priority of the cookie](https://developer.chrome.com/blog/new-in-devtools-81?hl=zh-cn#cookiepriority), the optional value is `Low` , `Medium`, `High`, only valid for Chrome >= 81 version.

## Read cookie

Read a cookie through `cookies.get(key, value, options)`. The parameters supported by options are:

- signed - Whether `Boolean` needs to verify the cookie, and pass the signed parameter when cooperating with the set. At this time, the front-end cannot tamper with the cookie. The default is true.
- encrypt - Whether `Boolean` needs to decrypt the cookie, and pass the encrypt parameter when cooperating with the set. At this time, the front-end cannot read the real cookie value, and the default is false.

## Delete cookie

Use `cookie.set(key, null)` to delete a cookie. If the `signed` parameter is passed, the signature will also be deleted.

## License

[MIT]((http://github.com/midwayjs/cookies/blob/master/LICENSE))

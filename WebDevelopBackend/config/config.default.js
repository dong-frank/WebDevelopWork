"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.default = {
    // use for cookie sign key, should change to your own and keep security
    keys: '1721541783879_7125',
    koa: {
        port: 7001,
    },
    cors: {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
    upload: {
        mode: 'file',
        fileSize: '10mb',
        whitelist: ['.jpg', '.jpeg', '.png', '.gif'],
        tmpdir: (0, path_1.join)(__dirname, '../../uploads/tmp'),
        cleanTimeout: 5 * 60 * 1000,
        base64: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQTRCO0FBRTVCLGtCQUFlO0lBQ2IsdUVBQXVFO0lBQ3ZFLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLElBQUk7S0FDWDtJQUNELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxHQUFHO1FBQ1gsWUFBWSxFQUFFLGdDQUFnQztLQUMvQztJQUNELE1BQU0sRUFBRztRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQzVDLE1BQU0sRUFBRSxJQUFBLFdBQUksRUFBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUM7UUFDNUMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSTtRQUMzQixNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ2MsQ0FBQyJ9
const middy = require("middy");
const { jsonBodyParser } = require("middy/middlewares");

const myMiddleware = config => {
  return {
    before: (handler, next) => {
      console.log("Before", handler.event.body);
      next();
    },
    after: (handler, next) => {
      console.log("After", handler.event.body);
      next();
    },
    onError: (handler, next) => {
      console.log("onError", handler);
      next();
    },
  };
};

const businessLogic = (event, context, callback) => {
  console.log(typeof event.body); // object

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: "hello",
      ...event.body
    }),
  });
};

exports.handler = middy(businessLogic)
  .use(jsonBodyParser())
  .use(myMiddleware({ foo: "bar" }));

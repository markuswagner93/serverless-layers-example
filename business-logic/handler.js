const dependency = require("business-dependencies");
const moment = require("moment");
module.exports.hello = async event => {
  console.log("Received call");
  console.log(dependency);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless v1.0! Your function executed successfully!" +
          moment().format("DD.MM.YYYYY") +
          " " +
          dependency.helloWorld(),
        input: event
      },
      null,
      2
    )
  };
};

module.exports.hello = async event => {
  console.log("Received call");
  console.log(dependency);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully at",
        input: event
      },
      null,
      2
    )
  };
};

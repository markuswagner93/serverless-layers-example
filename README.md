# Lambda Layers Example

This example describes how to use the Serverless Framework to create a microservices architecture with AWS Lambda Layers.

# Dependencies

- Node.JS 10
- Serverless
- Yarn

# Setup

Replace Account ID from AWS Account in outputs.json.

Run `serverless deploy -v -stage dev` in the root folder of this project with your AWS Account configured in AWS CLI. 
This will deploy the dependency layer, Run `serverless deploy -v -stage dev` in the `business-logic folder` folder to deploy the hello World Lambda with the dependencies injected in the layer.

IMPORTANT:
Dependencieslayer must be in a different folder than the business-logic, and then installed as devDependency in to the dependencieslayer and not in the business-logic. All Dependencies that are shared should be installed in to the dependencieslayer.

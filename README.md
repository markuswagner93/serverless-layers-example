# Lambda Layers Example

This example describes how to use the Serverless Framework to create a microservices architecture with AWS Lambda Layers.

# Dependencies

- Node.JS 10
- Serverless

# Setup

Replace Account ID in outputs.json.

Run sls deploy in the root folder of this project with your AWWS Account configured in AWS CLI.
This will deploy the dependency layer, now replace the layer ARN in the file business-logic/serverless.yml with your corresponding ARN of the new Layer. Run sls deploy in this folder to deploy the hello World Lambda with the dependencies injected in the layer.

IMPORTANT:
Dependencieslayer must be in a different folder than the business-logic, and then installed as devDependency in to the dependencieslayer and not in the business-logic. All Dependencies that are shared should be installed in to the dependencieslayer.

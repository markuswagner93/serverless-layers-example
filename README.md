# Lambda Layers Example

This example describes how to use the Serverless Framework to create a microservices architecture with AWS Lambda Layers.

The original Medium Article is made with Zoi by Markus Wagner and is soon gonna be published at Medium.com

# Dependencies

- Node.JS 10
- Serverless

# Setup

See steps in article, or checkout Branch step_1, step_2 and step_3 too see the changes, or follow following instructions:

1. Install (node.js 10)[https://nodejs.org/en/] and (Serverless)[https://serverless.com/]
2. Configure AWS Account in (AWS CLI)[https://aws.amazon.com/de/cli/]
3. Replace Account ID from AWS Account in outputs.json, [Tutorial for getting the ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html).
4. Run `serverless deploy -v -stage dev` in the root folder of this project, this will deploy the dependency layer. 
5. Change the current directory to `business-logic\` and run `serverless deploy -v -stage dev` to deploy the hello World Lambda with the dependencies injected from the layer.
6. Checkout Lambda created by serverless in the AWS Console

*IMPORTANT*:
dependencies-layer must be in a different folder than the business-logic, and then installed as devDependency in to the dependencieslayer and not in the business-logic. All Dependencies that are shared should be installed in to the dependencies-layer.

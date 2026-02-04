import { defineBackend } from '@aws-amplify/backend';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { auth } from './auth/resource';
import { sendEmail } from "./functions/sendEmail/resource";

export const backend = defineBackend({
  auth,
  sendEmail
});
backend.sendEmail.resources.lambda.addFunctionUrl({
  authType: lambda.FunctionUrlAuthType.AWS_IAM,
  cors: {
    allowCredentials: false,
    allowedHeaders: ['*'],
    allowedMethods: [lambda.HttpMethod.POST],
    allowedOrigins: ['*'],
  },
});

import { defineBackend } from '@aws-amplify/backend';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sendEmail } from "./functions/sendEmail/resource";

export const backend = defineBackend({
  auth,
  sendEmail,
  data,
});
backend.sendEmail.resources.lambda.addFunctionUrl({
  authType: lambda.FunctionUrlAuthType.,
  cors: {
    allowCredentials: false,
    allowedHeaders: ['*'],
    allowedMethods: [lambda.HttpMethod.POST, lambda.HttpMethod.OPTIONS],
    allowedOrigins: ['*'],
  },
});

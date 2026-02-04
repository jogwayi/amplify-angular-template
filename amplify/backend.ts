import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sendEmail } from "./functions/sendEmail/resource";

export const backend = defineBackend({
  auth,
  sendEmail,
  data,
});
backend.sendEmail.resources.lambda.addFunctionUrl({
  authType: 'NONE',
  cors: {
    allowCredentials: false,
    allowedHeaders: ['*'],
    allowedMethods: ['POST'],
    allowedOrigins: ['*'],
  },
});

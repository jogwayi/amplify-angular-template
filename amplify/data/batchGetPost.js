import { util } from '@aws-appsync/utils/lib';


export const request = function(ctx) {
  const { base_store } = ctx.args
  
    return {
      operation: "BatchGetItem",
      tables: {
        posts: [util.dynamodb.toMapValues({ base_store })]
      }
    };
}

export const response = (ctx) => ctx.result;
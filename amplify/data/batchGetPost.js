import { util } from '@aws-appsync/utils/lib';


export const request = function(ctx) {
  const { base_store, product_number_sku } = ctx.args
  
    return {
      operation: "BatchGetItem",
      tables: {
        posts: [util.dynamodb.toMapValues({ base_store, product_number_sku: product_number_sku[0] })]
      }
    };
}

export const response = (ctx) => ctx.result;
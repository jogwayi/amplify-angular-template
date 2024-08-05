import { util } from '@aws-appsync/utils/lib';


export const request = function(ctx) {
  const { partition_key, sort_key } = ctx.args
  
    return {
      operation: "BatchGetItem",
      tables: {
        PostTable: [util.dynamodb.toMapValues({ base_store: partition_key })]
      },
    };
}

export const response = function (ctx) {
  return ctx.result;
}
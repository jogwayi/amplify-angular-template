import { util } from '@aws-appsync/utils/lib';


export const request = function(ctx) {
  const { partition_key, sort_key } = ctx.args
    //var key = sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key }))
    return {
      operation: "GetItem",
      tables: {
        PostTable: {
          //keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          // keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          //key: util.dynamodb.toMapValues({ product_number_sku: sort_key[0], base_store: partition_key }),
          key: util.dynamodb.toMapValues({ id: ctx.args.id }),
          consistentRead: true,
        }
      },
    };
}

export const response = function (ctx) {
  return ctx.result;
}
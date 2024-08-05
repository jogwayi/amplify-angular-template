import { util } from '@aws-appsync/utils/lib';


export const request = function(ctx) {
  const { partition_key, sort_key } = ctx.args
  var keys = []
  sort_key.forEach((sk) => {
    keys.push(util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key }));
  });
    //var key = sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key }))
    return {
      operation: "BatchGetItem",
      tables: {
        PostTable: keys
         /* {
          //keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          // keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          key: util.dynamodb.toMapValues({ product_number_sku: sort_key[0], base_store: partition_key }),
          consistentRead: true,
        } */
      },
    };
}

export const response = function (ctx) {
  return ctx.result;
}
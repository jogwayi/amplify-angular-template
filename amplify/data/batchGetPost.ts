import { util } from '@aws-appsync/utils/lib';


export function request(ctx: any) {
    const partition_key = 'GerberUSA';
    const sort_key = ['07505G','07510G','07520G1'];
    //var key = sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key }))
    return {
      operation: "GetItem",
      tables: {
        PostTable: {
          //keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          // keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          key: util.dynamodb.toMapValues({ product_number_sku: sort_key[0], base_store: partition_key }),
          consistentRead: true,
        }
      },
    };
}

export function response(ctx: any) {
  return ctx.result;
}
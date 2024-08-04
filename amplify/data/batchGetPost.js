import { util } from '@aws-appsync/utils/lib';

export function request(ctx) {
    const partition_key = 'GerberUSA';
    const sort_key = ['07505G','07510G','07520G1'];
    return {
      operation: "GetItem",
      tables: {
        PostTable: {
          //keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          // keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          key: util.dynamodb.toMapValues({PK: partition_key, SK: sort_key[0] }),
          consistentRead: true,
        }
      },
    };
}

export function response(ctx) {
  return ctx.result;
}

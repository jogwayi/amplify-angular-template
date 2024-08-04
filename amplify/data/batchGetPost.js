import { util } from '@aws-appsync/utils/lib';

export function request(ctx) {
    const partition_key = 'GerberUSA';
    const sort_key = ['07505G','07510G','07520G1'];
    return {
      operation: "BatchGetItem",
      tables: {
        PostTable: {
          keys: sort_key.map(sk => util.dynamodb.toMapValues({ product_number_sku: sk, base_store: partition_key })),
          consistentRead: true,
        }
      },
    };
}

export function response(ctx) {
  return ctx.result;
}
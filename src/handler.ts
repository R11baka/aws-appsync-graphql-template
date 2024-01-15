import type { AppSyncResolverEvent } from "aws-lambda";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const handler = async (event: AppSyncResolverEvent<object>): Promise<Record<string, any>> => {
  console.log(event);
  return {};
};

export { handler };

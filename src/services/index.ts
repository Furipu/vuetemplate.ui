import { IMetricClient, MetricClient, IAssetClient, AssetClient } from "./client";


import axios, { AxiosInstance } from "axios";
/* eslint-disable  @typescript-eslint/no-explicit-any */
function create(baseUrl?: string, options: any = {}): AxiosInstance {
  const validateStatus = function(): boolean {
    return true; // all http states should result in a resolved promise , so NSwag generated code can handle it
  };

  const instance: AxiosInstance = axios.create(
    Object.assign(
      {
        baseURL: baseUrl,
        withCredentials: true,
        validateStatus: validateStatus
      },
      options
    )
  );

  return instance;
}

export const client: {
  MetricClient: IMetricClient;
  AssetClient: IAssetClient;
} = {
  MetricClient: new MetricClient("", create()),
  AssetClient: new AssetClient("", create()),
};

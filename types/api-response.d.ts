/**
 * @file api-response.d.ts
 * @description This file contains TypeScript types for API responses.
 */

export {};

declare global {
  type ProviderType = "GOOGLE" | "TELEGRAM";

  interface APIBaseResponse {
    message: string;
    metadata?: {
      page?: number;
      limit?: number;
      totalPage?: number;
      totalCount?: number;
    };
    data?: unknown;
    statusCode: number;
  }

  interface APIBaseErrorResponse {
    error: string;
    message: string[];
    statusCode: number;
  }

  interface APIBaseGenerateUploadResponse {
    uploadUrl: string;
    url: string;
  }

  interface APITokenInfoResponse {
    success: boolean;
    response: {
      ico: string;
      total: string;
      total_amount: string;
      total_token: number;
      sold: string;
      sold_amount: string;
      sold_token: number;
      progress: number;
      price: number;
      bonus: {
        base: number;
        start: string;
        end: string;
        timezone: string;
        amount: { [key: string]: number };
      };
      start: string;
      end: string;
      timezone: string;
      min: number;
      max: number;
      soft: {
        cap: number;
        amount: string;
        percent: number;
      };
      hard: {
        cap: number;
        amount: string;
        percent: number;
      };
    };
  }
}

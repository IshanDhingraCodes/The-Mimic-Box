import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Shared base type for API responses
type BaseResponse = {
    message: string;
    status?: number;
};

// Type for success responses
export type SuccessResponseInput<T = undefined> = BaseResponse & { payload?: T };
export type SuccessResponseOutput<T = undefined> = {
    success: true;
    message: string;
    payload: T;
};

// Type for error responses
export type ErrorResponseInput<T> = BaseResponse & {
    error?: Record<string, unknown> | Error;
    extraData?: T;
};
export type ErrorResponseOutput<T = undefined> = {
    success: false;
    message: string;
    error?: Record<string, unknown> | Error | null;
    extraData: T;
};

// Type for API call responses
type BaseApiCallType<TRequest> = {
    data?: TRequest;
    retryCount?: number;
    retryDelay?: number;
    retryCondition?: (err: AxiosError<ErrorResponseOutput> | Error) => boolean;
    onStart?: () => Promise<void | boolean | TRequest> | void | boolean | TRequest;
    onError?: (err: AxiosError<ErrorResponseOutput> | Error | unknown, message: string) => void;
    onEnd?: () => void;
} & AxiosRequestConfig<TRequest>;

type ExternalApiCall<TRequest, TResponse> = BaseApiCallType<TRequest> & {
    isExternalApiCall: true;
    onSuccess?: (res: AxiosResponse<TResponse>) => void;
};

type InternalApiCall<TRequest, TResponse> = BaseApiCallType<TRequest> & {
    isExternalApiCall?: false;
    onSuccess?: (data: TResponse, res: AxiosResponse<SuccessResponseOutput<TResponse>>) => void;
};

export type MakeApiCallType<TRequest, TResponse> = ExternalApiCall<TRequest, TResponse> | InternalApiCall<TRequest, TResponse>;

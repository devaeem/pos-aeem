
export interface BaseResponse<T = unknown> {
 message?: string;
 success?: boolean;
 data?: any;
 traceStack?: any;
}

export interface IPagination<T= unknown> {
 page: number;
 pageSize: number;
 totalPages: number;
 total: number;
 rows: T[];
}



export interface BaseResponseQuery<T = unknown> {
 message?: string;
 fild?: string;

}

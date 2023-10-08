export interface IMeta {
    limit: number;
    number: number;
    page: number;
}
export type ResponseSuccessData = {
    data: any,
    meta?: IMeta;
};
export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
    path: string | number;
    message: string;
};
export interface IDepartments {
    id: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    _v: number;
}
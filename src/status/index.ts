export default interface StatusInterface {
    statusCode: number;
    status: 'error' | 'success';
    message: string;
}
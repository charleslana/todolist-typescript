import express, {NextFunction, Request, Response} from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from './error/AppError';
import cors from 'cors';

const port = 8081;
const hostname = 'localhost';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((request: Request, response: Response, next: NextFunction) => {

    return response.status(404).json({
        statusCode: 404,
        status: 'error',
        message: 'Not found'
    });
});

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            statusCode: error.statusCode,
            status: 'error',
            message: error.message
        });
    }

    return response.status(500).json({
        statusCode: 500,
        status: 'error',
        message: error.message
    });
});

app.listen(port, hostname, () => {
    console.log(`Server started in ${hostname} on port ${port}`);
});
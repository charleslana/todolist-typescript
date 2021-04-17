import express from 'express';

const errorHandling = express();

errorHandling.use((request, response) => {

    return response.status(404).json({
        statusCode: 404,
        status: 'error',
        message: 'Not found'
    });
});

errorHandling.use((request, response) => {
    const error = new Error();
    console.log(error.stack);

    return response.status(500).json({
        statusCode: 500,
        status: 'error',
        message: error.message || 'Internal Server Error'
    });
});

export default errorHandling;
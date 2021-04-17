import express from 'express';
import 'express-async-errors';
import routes from "./routes";

const port = 8081;
const hostname = 'localhost';
const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, hostname, () => {
    console.log(`Server started in ${hostname} on port ${port}`);
});
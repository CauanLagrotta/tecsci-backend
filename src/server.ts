import express from 'express';
import { mainRouter } from './routes/main.routes';

const app = express();

app.use(express.json());
app.use(mainRouter);

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
})
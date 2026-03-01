import express from 'express';
import cors from 'cors';
import router from './routes.js';

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`server running at http://${host}:${port}`);
});
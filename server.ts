import 'tsconfig-paths/register';

import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { healthcheck } from '@routes';

import { Main } from '@controllers';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/healthcheck', healthcheck());

app.get('/convert', (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    const helper = new Main(data);

    res.json({ data: { isValid: helper.isValid(), data: helper.getInput() } });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Conversion failed', error: (error as Error).message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`Listening on port ${port}...`);
});

export default app;

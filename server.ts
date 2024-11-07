import 'tsconfig-paths/register';

import express, { Request, Response } from 'express';
import cors from 'cors';
import { Main } from '@controllers';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post('/api/convert', (req: Request, res: Response) => {
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

app.listen(PORT, () => {
  console.info(`Server running on http://0.0.0.0:${PORT}`);
});

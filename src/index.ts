import express from 'express';
import dotenv from 'dotenv';
import axios, { AxiosError } from 'axios';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;
const SCRYFALL_API_URL = process.env['SCRYFALL_API_URL'];

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.get('/cards/search', async (req, res) => {
  const query = req.query['q'];

  // Validate the query
  if (!query) {
    return res.status(400).json({ error: "Search query 'q' is required." });
  }

  try {
    const response = await axios.get(
      `${SCRYFALL_API_URL}/cards/search?q=${query}`,
    );
    res.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.data) {
      return res
        .status(axiosError.response.status)
        .json(axiosError.response.data);
    }
    // General error
    return res.status(500).send('Error fetching data from Scryfall');
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}.`);
});

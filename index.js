const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./src/routes');
const port = 3500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`App UAS listening on port ${port}`);
});

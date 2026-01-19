import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.post('/', async (req, res) => {
  console.log(req.body);
});
app.listen(3000, () => {
  console.log('server run');
});

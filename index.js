const express = require('express');
const userRouter = require('./routes/user.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('NODEMON WORK');
});

// api.use('/api', userRouter);

app.listen(PORT, () => console.log('Server started on port ' + PORT));

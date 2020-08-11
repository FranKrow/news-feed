const app = require('./app');
const port = process.env.PORT || 8888;
const pid = process.pid;

const server = app.listen(process.env.PORT || port, () => {
  console.log(`Server: process ${pid} listening on http://localhost:${port}`);
});

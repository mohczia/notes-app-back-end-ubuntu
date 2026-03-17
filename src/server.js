import server from './server/index.js';

const port = process.env.PORT;
const host = process.env.HOST;

server.listen(port, () => {
  console.log(`server running at http://${host}:${port}`);
});
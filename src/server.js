/* eslint no-console: "off" */
const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 3000;

async function checkDatabaseConnection() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection to the database has been established successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function startServer() {
  const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  server.on('error', onError);
  checkDatabaseConnection();
}

startServer();

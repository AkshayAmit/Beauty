const { app } = require("./src/app");
const { env } = require("./src/config/env");

const server = app.listen(env.port, "0.0.0.0", () => {
  console.log(`BEAUTY Salon server running on port ${env.port}`);
  console.log(`Client URL: ${env.clientUrl}`);
});

function shutdown(signal) {
  console.log(`${signal} received. Closing server.`);
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  server.close(() => process.exit(1));
});

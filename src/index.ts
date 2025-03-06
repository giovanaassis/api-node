import { Knex } from "./server/database/knex";
import app from "./server/server";
import "dotenv/config";

const startServer = () => {
  const port = process.env.PORT || 3333;
  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
};

if (process.env.IS_LOCALHOST !== 'true') {
   Knex.migrate.latest()
    .then(() => startServer)
    .catch(console.log) ;
} else {
    startServer();
}



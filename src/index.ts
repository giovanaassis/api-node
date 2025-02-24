import app from "./server/server";
import 'dotenv/config';

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
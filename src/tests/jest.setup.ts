import supertest from "supertest";
import app from "../server/server";
import { Knex } from "../server/database/knex";

beforeAll(async () => {
    await Knex.migrate.latest();
})

afterAll(async () => {
    await Knex.destroy();
})

export const testServer = supertest(app);
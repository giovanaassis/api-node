import supertest from "supertest";
import app from "../server/server";

export const testServer = supertest(app);
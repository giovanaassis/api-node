import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
    return knex.schema
    .table(ETableNames.cidade, (table) => {
        console.log(table);
    })
}

export async function down(knex: Knex) {}
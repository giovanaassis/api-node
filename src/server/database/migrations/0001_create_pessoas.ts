import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(Knex: Knex) {
   return Knex.schema
    .createTable(ETableNames.pessoa, table => {
        table.bigIncrements('id').primary().index();
        table.string('nomeCompleto').index().notNullable();
        table.string('email').unique().notNullable();

        table
        .bigInteger('cidadeId')
        .index()
        .notNullable()
        .references('id')
        .inTable(ETableNames.cidade)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

        table.comment('Tabela usada para armazenar pessoas no sistema.')
    })
    .then(() => {
        console.log(`# Created table ${ETableNames.pessoa}`)
    })
}

export async function down(Knex: Knex) {
    Knex.schema.dropTable(ETableNames.pessoa)
    .then(() => {
        console.log(`# Dropped table ${ETableNames.pessoa}`)
    });
}
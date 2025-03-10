import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"

describe('Cidades - Create', () => {

    it('Cria registro', async () => {

        const res1 = await testServer
        .post('/cidades')
        .send({ nome: "Nova Iguaçu" });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    })

    it('Tenta criar um registro com nome muito curto', async () => {
        const res1 = await testServer
        .post('/cidades')
        .send({ nome: "No" });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    })

    it('Tenta criar registro com tipo inválido', async () => {
        const res1 = await testServer
        .post('/cidades')
        .send({ nome: 1 });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    })

    it('Tenta criar registro vazio', async () => {
        const res1 = await testServer
        .post('/cidades')
        .send({});

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    })

})
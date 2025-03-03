import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/validation";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";

interface IParamsProps {
    id?: number
}

interface IBodyProps extends Omit<ICidade, 'id'> {}

// middleware de validação de dados
export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    })),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().integer().moreThan(0)
    }))
}))


export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {

    if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Registro não encontrado'
      }
    });
  
    return res.status(StatusCodes.NO_CONTENT).send();
  };
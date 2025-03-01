import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/validation";
import { StatusCodes } from "http-status-codes";

interface IParamsProps {
    id?: number
}

// middleware de validação de dados
export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().integer().moreThan(0)
    }))
}))


export const deleteById = async (req: Request<IParamsProps>, res: Response) => {

    if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro não encontrado'
        }
    })

    console.log(req.params);

    res.status(StatusCodes.NO_CONTENT).send();
    
}
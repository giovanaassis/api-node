import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
    nome: string,
    estado: string
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required()
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    let validatedData: ICidade | undefined = undefined;
    try {
        validatedData = await bodyValidation.validate(req.body, { abortEarly: false });
        console.log(req.body.nome);
        res.send('Criado!');

    } catch (error) {
        const yupError = error as yup.ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(( error ) => {
            if (!error.path) return;

            validationErrors[error.path] = error.message;
        })

        res.status(StatusCodes.BAD_REQUEST).json({
            errors: validationErrors,
        })
    }

    
}
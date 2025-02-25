import { Request, Response } from "express";
import * as yup from "yup";

interface ICidade {
    nome: string
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    let validatedData: ICidade | undefined = undefined;
    try {
        validatedData = await bodyValidation.validate(req.body);
        console.log(req.body.nome);
        res.send('Criado!');

    } catch (error) {
        const yupError = error as yup.ValidationError;

        res.json({
            errors: yupError.message
        });
    }

    
}
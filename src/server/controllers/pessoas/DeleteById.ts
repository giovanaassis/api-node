import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { PessoasProvider } from './../../database/providers/pessoas';
import { validation } from '../../shared/middlewares/validation';


interface IParamProps {
  id?: number;
}
export const deleteByIdValidation = validation(get => ({
  params: get<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  if (!req.params.id) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    });
  }

  const result = await PessoasProvider.deleteById(Number(req.params.id));
  if (result instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  res.status(StatusCodes.NO_CONTENT).send();
};
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { AnySchema, Schema, ValidationError } from "yup";

type TProperty = "body" | "header" | "params" | "query";

type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

type TAllSchemas = Record<TProperty, AnySchema>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = (schemas) => async (req, res, next) => {

  const errorsResult: Record<string, Record<string, string>> = {};  

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
    } catch (error) {
      const yupError = error as ValidationError;
      const validationErrors: Record<string, string> = {};

      yupError.inner.forEach((error) => {
        if (!error.path) return;

        validationErrors[error.path] = error.message;
      });

      errorsResult[key] = validationErrors;
    }
  });

  if (Object.entries(schemas).length === 0) {
    return next();

  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult })
  }

};

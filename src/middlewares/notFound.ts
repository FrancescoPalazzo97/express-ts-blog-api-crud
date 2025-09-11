import { Request, Response } from "express";
import type { ErrorType } from "../lib/types";

export const notFound = (req: Request, res: Response<ErrorType>) => {
    res.status(404).json({
        status: 404,
        error: "Not found",
        message: "Pagina non trovata"
    });
};
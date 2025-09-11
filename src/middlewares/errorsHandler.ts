import { Request, Response } from "express";
import { guardType } from "../lib/utility";

export const errorsHandler = (err: unknown, req: Request, res: Response) => {
    if (guardType().isError(err)) {
        res.status(500).json({
            error: err.message
        });
    };
};
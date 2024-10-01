import { Request, Response } from "express";
import SignupDTO from "../types/dto/signupDto";
import authService from "../services/authService";


export const handleSigninRequset = async (
  req: Request<any, any, SignupDTO>,
  res: Response
): Promise<void> => {
  try {
    const result = await authService.signin(req.body);
    res.status(result.status!).json(result);
  } catch (err) {
    console.log(err);
  }
};


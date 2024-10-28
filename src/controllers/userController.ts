import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';

const userRepository = new UserRepository();
  
export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await userRepository.addUser(name, email);
    res.status(201).json(user);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar usuário' });
  }
};
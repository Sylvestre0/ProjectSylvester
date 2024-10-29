import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

const authService = new AuthService();

// Registro de usuário
export const register = async (req: Request, res: Response) => {
  const { name, email, password, googleId } = req.body;

  try {
    const user = await authService.registerUser(name, email, password,googleId);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

//in progress ...
export const login = async (req: Request, res: Response) => {
  const { email, password, googleId } = req.body;

  try {
    let user;

    if (googleId) { // Se o Google ID foi fornecido no login
      // Login usando o Google ID
      user = await authService.loginUserWithGoogleId(googleId);
    } else if (email && password) { // Se email e senha foram fornecidos
      // Login usando Email e Senha
      user = await authService.loginUser(email, password);
    } else {
      throw new Error('Credenciais de login insuficientes.');
    }

    res.status(200).json({ message: 'Login bem-sucedido', user }); // Login bem-sucedido, retorna usuário
  } catch (err: any) {
    res.status(401).json({ error: err.message }); // Falha no login, retorna erro
  }
};

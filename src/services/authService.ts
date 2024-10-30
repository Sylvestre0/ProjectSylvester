import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../helpers/hashHelper';
import { createSession } from '../helpers/sessionHelper';
import { typeUser } from '../models/userModel'
import { isValidEmail, isValidName, isValidPassword } from '../helpers/validationHelper';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(name: string, email: string, password: string, googleId: string): Promise<typeUser> {
    // Validação dos dados
    if (!isValidName(name)) {
      throw new Error('Nome inválido');
    }
    if (!isValidEmail(email)) {
      throw new Error('Email inválido');
    }
    if (!isValidPassword(password)) {
      throw new Error('Senha inválida');
    }
  
    // Criptografar a senha
    const passwordHash = hashPassword(password);
  
    try {
      // Tentar adicionar o usuário ao repositório
      const user = await this.userRepository.addUser(name, email, passwordHash, googleId);
      return user;
    } catch (err: any) {
      // Captura do erro de unicidade
      if (err.code === '23505') {
        throw new Error('Email já está em uso.');
      } else {
        throw new Error('Erro no servidor.');
      }
    }
  }
}
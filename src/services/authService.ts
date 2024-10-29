import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../helpers/hashHelper';
import { createSession } from '../helpers/sessionHelper';
import { typeUser } from '../models/userModel'

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

    async registerUser(name: string, email: string, password: string, googleId: string): Promise<typeUser> {
      try {
        const passwordHash = hashPassword(password);
        const user = await this.userRepository.addUser(name, email, passwordHash, googleId);
        return user;
      } catch (err: any) {
        if (err.code === '23505') {
          throw new Error('Email já está em uso.');
        } else {
          throw new Error('Erro no servidor.');
        }
      }
    }
// in progress ...
  async loginUser(email: string, password: string) {
    const user = await this.userRepository.login(email);
    if (!user) throw new Error('Usuário não encontrado');

    const isPasswordValid = comparePassword(password, user.passwordHash);
    if (!isPasswordValid) throw new Error('Senha incorreta');

    createSession(user.id); // Cria a sessão
    return user;
  }
}

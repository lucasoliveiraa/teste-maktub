import { getRepository } from 'typeorm';

import user_view from '../views/users.view';

import User from '../../../models/User';
import BCryptHashProvider from '../HashProvider/implementations/BCryptHashProvider';

interface Request {
  name: string;
  email: string;
  password: string;
}

interface UserReturn {
  id: string;
  name: string;
  email: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: Request): Promise<UserReturn> {
    const usersRepository = getRepository(User);
    const hashProvider = new BCryptHashProvider();

    const hashedPassword = await hashProvider.generateHash(password);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    const userFormatted = user_view.render(user);

    return userFormatted;
  }
}

export default CreateUserService;

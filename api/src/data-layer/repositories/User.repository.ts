import { EntityRepository, Repository } from 'typeorm'

import { User } from '../models'
import { ICreateUser } from '../../@types/'

// ---

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  //

  public static async getByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ email })
  }

  public static async create({ email, password }: ICreateUser): Promise<User> {
    const user = new User()
    user.email = email
    user.password = password
    user.createdAt = new Date()
    user.updatedAt = new Date()
    await user.save()
    return user
  }
}

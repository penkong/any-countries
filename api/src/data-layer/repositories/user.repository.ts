import {
  // Connection,
  EntityRepository,
  // getConnection,
  // QueryRunner,
  Repository,
  getRepository
} from 'typeorm'

import { User } from '../models/'

@EntityRepository(User)
export class CronJobsRepository extends Repository<User> {
  public async getAllCronJobs(): Promise<User[]> {
    const cronJobRepository: Repository<User> = getRepository(User)
    return cronJobRepository.find()
  }
}

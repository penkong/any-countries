// -------------------------- Packages ----------------------------

import {
  Connection,
  EntityRepository,
  getConnection,
  QueryRunner,
  Repository,
  getRepository
} from 'typeorm'

import { Moment } from 'moment'
import moment from 'moment-timezone'

// -------------------------- Local  ----------------------------

import { User } from '../models'
import { CronJobsRequestDto } from '../dto'
import {
  IInfoForChildMicro,
  IMessagePatternForUpdateCronJob
} from '../interfaces/kafka-message-patterns'

// ----------------------------------------------------------------

@EntityRepository(CronJobs)
export class CronJobsRepository extends Repository<CronJobs> {
  // ---------------------- Logger --------------------------------

  private logger = new Logger(CronJobsRepository.name)

  // ------------------------------------------------------

  public async addCronJobToDB(
    queryRunner: QueryRunner,
    cronExpression: string,
    name: string,
    data: IInfoForChildMicro
  ): Promise<CronJobs> {
    //
    const cronJob: CronJobs = new CronJobs()

    const now: Moment = moment()

    cronJob.createdAt = now.toDate()
    cronJob.updatedAt = now.toDate()
    cronJob.deletedAt = null
    cronJob.cronExpression = cronExpression
    cronJob.name = name
    cronJob.data = data

    return await queryRunner.manager.save(cronJob)
  }

  // ---------- end of method

  // ---------------------------------------------

  public async getAllCronJobs(): Promise<CronJobs[]> {
    const cronJobRepository: Repository<CronJobs> = getRepository(CronJobs)
    return cronJobRepository.find()
  }

  // ---------------------------------------------

  public async findAndUpdate(data: IMessagePatternForUpdateCronJob) {}

  // ---------------------------------------------

  public async softlyFindAndDeleteCronJob(name: string) {}
}

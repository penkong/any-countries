import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Index({ unique: true })
  @Column({ nullable: false, length: 50, unique: true })
  email: string

  @Column({ type: 'text', nullable: false })
  password: string

  @Column({ nullable: false, default: false })
  confirmed: boolean

  @Column('text', { default: 'free-trial' })
  type: string

  @Column({ type: 'bool', default: false })
  deleted: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date
}

// this.id = 0
// this.ukey = ''
// this.email = email
// this.password = password
// this.confirmed = false
// this.refreshIndex = refreshIndex
// this.createdAt = new Date()
// this.updatedAt = new Date()
// @Entity('usersgdfg')
// export default class Userds {
//   static async register(
//     email: string,
//     password: string,
//     confirmation: string
//   ): Promise<Result<User>> {
//     if (password != confirmation)
//       return new Result<User>(new Error('Passwords do not match'), 400)

//     const u = await User.getByEmail(email)
//     if (u != undefined) return new Result<User>(new Error('User exists'), 400)

//     try {
//       const hpass = await hash(password, 12)
//       const user = new User(email, hpass, 0)
//       user.ukey = uuidv4()
//       if (await user.save()) return new Result<User>(user, 201)
//       return new Result<User>(new Error('Registration failed'), 500)
//     } catch (err) {
//       console.log(err)
//       return new Result<User>(new Error('Registration failed'), 500)
//     }
//   }

//   static async login(email: string, password: string): Promise<Result<User>> {
//     const user = await User.getByEmail(email)
//     if (user == undefined)
//       return new Result<any>(new Error('Invalid credentials'), 400)

//     if (!user.confirmed)
//       return new Result<any>(new Error('User not confirmed'), 401)

//     try {
//       const valid = await compare(password, user.password)
//       return valid
//         ? new Result(user, 200)
//         : new Result<any>(new Error('Invalid credentials'), 400)
//     } catch (err) {
//       console.log(err)
//       return new Result<any>(new Error('Login failed'), 500)
//     }
//   }
// }

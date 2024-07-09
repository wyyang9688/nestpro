import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { User, Prisma } from '@prisma/client';
export class CreateUserDto  implements Prisma.UserCreateInput {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
  name: string;

  

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password is too weak',
    })
  email: string;

  id?: number;
  posts?: Prisma.PostCreateNestedManyWithoutAuthorInput;
  profile?: any;
}
// {
//   name: 'Alice',
//   email: 'alice@prisma.io',
//   posts: {
//     create: { title: 'Hello World' },
//   },
//   profile: {
//     create: { bio: 'I like turtles' },
//   },
// },
// }

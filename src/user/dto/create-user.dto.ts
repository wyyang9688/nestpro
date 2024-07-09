import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  //   @IsString()
  //   @MinLength(4)
  //   @MaxLength(20)
  name: string;

  //   @IsString()
  //   @MinLength(8)
  //   @MaxLength(32)
  //   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //     message: 'password is too weak',
  //   })
  //   password: string;

  id: number;
  email: string;

  posts?: any[];
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

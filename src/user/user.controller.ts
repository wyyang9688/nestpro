import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserModel, Post as PostModel } from '@prisma/client';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('add')
  async signupUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserModel> {
    console.log(new Date().getTime())
    // 在这里，你可以将DTO的数据转换成Prisma客户端需要的格式
    const { name, email } = createUserDto;
    const userData = { name: name, email: email };
    console.log(userData)
    return this.userService.createUser(userData);
  }
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  @Get('')
  findAll(@Query('id') id) {
    //http://wwww.localhost:3000/api/user?id=1
    console.log(id)
    return this.userService.user({id:Number(id)});
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}

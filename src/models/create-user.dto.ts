import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'alice@example.com', description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'securepass1', description: 'The password of the user' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'Alice', description: 'The first name of the user' })
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Smith', description: 'The last name of the user' })
  @IsString()
  last_name: string;
}

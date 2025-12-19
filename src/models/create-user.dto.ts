import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'alice@example.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'securepass1', description: 'The password of the user' })
  password: string;

  @ApiProperty({ example: 'Alice', description: 'The first name of the user' })
  first_name: string;

  @ApiProperty({ example: 'Smith', description: 'The last name of the user' })
  last_name: string;
}

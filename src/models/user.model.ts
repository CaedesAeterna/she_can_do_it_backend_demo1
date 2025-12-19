import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
  id: number;

  @ApiProperty({ example: 'alice@example.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'Alice', description: 'The first name of the user' })
  first_name: string;

  @ApiProperty({ example: 'Smith', description: 'The last name of the user' })
  last_name: string;

  @ApiProperty({ example: '2023-10-27T10:00:00.000Z', description: 'Creation timestamp' })
  created_at: Date;
}

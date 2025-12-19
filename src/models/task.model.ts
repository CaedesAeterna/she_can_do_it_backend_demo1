import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty({ example: 1, description: 'The unique identifier of the task' })
  id: number;

  @ApiProperty({ example: 'Setup Project', description: 'The title of the task' })
  title: string;

  @ApiProperty({ example: 'Initialize the NestJS app', description: 'The description of the task' })
  description: string;

  @ApiProperty({ example: 'pending', description: 'The status of the task' })
  status: string;

  @ApiProperty({ example: 1, description: 'The ID of the user who owns this task' })
  user_id: number;

  @ApiProperty({ example: '2023-10-27T10:00:00.000Z', description: 'Creation timestamp' })
  created_at: Date;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Setup Project', description: 'The title of the task' })
  title: string;

  @ApiProperty({ example: 'Initialize the NestJS app', description: 'The description of the task', required: false })
  description?: string;

  @ApiProperty({ example: 1, description: 'The ID of the user who owns this task' })
  user_id: number;
}

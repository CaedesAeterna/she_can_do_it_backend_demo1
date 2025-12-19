import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Setup Project', description: 'The title of the task' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Initialize the NestJS app', description: 'The description of the task', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 1, description: 'The ID of the user who owns this task' })
  @IsNumber()
  user_id: number;
}

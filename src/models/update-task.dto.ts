import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty({ example: 'Buy Groceries', description: 'The title of the task', required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ example: 'Milk, Eggs, Bread', description: 'The description of the task', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'completed', description: 'The status of the task', enum: ['pending', 'in_progress', 'completed'], required: false })
  @IsOptional()
  @IsEnum(['pending', 'in_progress', 'completed'])
  status?: string;
}

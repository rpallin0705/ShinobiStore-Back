import { PartialType } from '@nestjs/mapped-types';
import { CreateMygameDto } from './create-mygame.dto';

export class UpdateMygameDto extends PartialType(CreateMygameDto) {}



import { IsString, IsNotEmpty, Matches, IsNumber, IsInt } from "class-validator";


export class ListUserDto  {
  @IsNumber()
  @IsNotEmpty({ message: "ค่าของ page ต้องไม่ว่างเปล่า" })
  @IsInt()
  readonly page!: number;

  @IsNumber()
  @IsNotEmpty({ message: "ค่าของ pageSize ต้องไม่ว่างเปล่า" })
  @IsInt()
  readonly pageSize!: number


}
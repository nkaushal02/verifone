import { ApiProperty } from "@nestjs/swagger";
import { get as _get } from "lodash";

export class CustomResponse {
  static serialize(statusCode: number, message: string, responseData): CustomResponse {
    return new CustomResponse({
      statusCode,
      message,
      results: responseData ? responseData : []
    });
  }

  private constructor(partial: Partial<CustomResponse>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    type: "number",
    title: "Response Code",
    enum: ["SUCCESS","FAILED","NOT FOUND","Unauthorized access"],
    description: "0-> **Data found succesfully.** \n\n 1-> **Failed** \n\n 2-> **Not Found** \n\n 3-> **Unauthorized access**",
    required: false
  })
  statusCode: number;

  @ApiProperty({
    type: "string",
    title: "Response Message",
    enum: [0, 1, 2, 3],
    example: "Data found succesfully.",
    required: false
  })
  message: string;

  @ApiProperty({
    type: "array",
    title: "Results",
    example: `[{"key":"Random String","key2":"Random String"}]`,
    description: "list of results",
    default: [],
    required: false
  })
  results: any;
}


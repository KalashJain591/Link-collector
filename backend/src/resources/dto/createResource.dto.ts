import { IsNotEmpty, IsString } from "class-validator";
import { Item } from "src/helper";

export class CreateResoureDto{
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    resourceName: string;

    listOfItems?: Item[];

    @IsString()
    comments? : string;

    rating?: number;
}

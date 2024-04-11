import { IsNotEmpty, IsString } from "class-validator";
import { Item } from "src/helper";

export class UpdateResoureDto{
    
    @IsNotEmpty()
    @IsString()
    resourceId: string;
    
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

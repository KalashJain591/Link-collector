import { Injectable } from '@nestjs/common';
import { ResourceDocument } from './resource.schema';
import { Model } from 'mongoose';
import { Failure, Success, failure, success } from 'src/helper';
import { CreateResoureDto, UpdateResoureDto } from './dto';

@Injectable()
export class ResourceRepository {
    constructor(private resourceModel: Model<ResourceDocument>) {}

    async getAllResources(): Promise<Failure<string> | Success<ResourceDocument[]>> {
        const resources = await this.resourceModel.find();
        if(resources.length === 0)
            return failure('No resources found');
        else 
            return success(resources);
    }

   async getResourceById(id: string):Promise<Failure<string> | Success<ResourceDocument>> {
        const user = await this.resourceModel.findById(id);
        if(!user?._id)
            return failure('User not found');
        else 
            return success(user);
    }

    async createResource(resource: CreateResoureDto):Promise<Failure<string> | Success<ResourceDocument>> {
        const createdUser = await this.resourceModel.create(resource);
        if(!createdUser?._id)
            return failure('User not created')
        else 
            return success(createdUser);
    }

    async updateResource(id: string, updatedResource: UpdateResoureDto): Promise<Failure<string> | Success<ResourceDocument>> {
        const resource = await this.resourceModel.findByIdAndUpdate(id, updatedResource, { new: true });
        if(!resource?._id)
            return failure('User not found');
        else 
            return success(resource);
    }

    async deleteResource(id: string): Promise<Failure<string> | Success<ResourceDocument>> {
        const resource = await this.resourceModel.findByIdAndDelete(id);
        if(!resource?._id)
            return failure('User not found');
        else 
            return success(resource);
    }
}



export default ResourceRepository;
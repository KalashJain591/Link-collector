import { Injectable } from "@nestjs/common";
import ResourceRepository from "./resource.repository";

@Injectable()
export class ResourceService {
    constructor(
        private resourceRepository: ResourceRepository
    ){}
    async getResource(resourceId: string) {
        return await this.resourceRepository.getResourceById(resourceId);
    }
    async getResources() {
        return await this.resourceRepository.getAllResources();
    }
    async createResource(resource: any) {
        return await this.resourceRepository.createResource(resource);
    }
    async updateResource(resourceId: string, updatedResource: any) {
        return await this.resourceRepository.updateResource(resourceId, updatedResource);
    }
    
}
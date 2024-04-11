import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('resources')
export class ResourceController {
    @Get(':resourceId')
    getResources() {
        return "This is the resources page";
    }

    @Get('user/:userId')
    getResourcesbyUser() {

    }

    @Post('user/:userId')
    createResource() {
        
    }

    @Put(':resourceId')
    updateResource(@Param('resourceId') resourceId: string) {
    }

    @Delete(':resourceId')
    deleteResource(@Param('id') resourceId: string) {
    }
}
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
    //GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{location}];
  }

  //GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id : number) {
    return {id};
  }

//POST /profiles
@Post()
create(@Body() createProfileDto: CreateProfileDto) {
return{
    name: createProfileDto.name,
    description: createProfileDto.description,
};

};

// Update profile

@Put('id')
update(
    @Param('id') id: string,
    @Body() UpdateProfileDto : UpdateProfileDto,
){
    return {
        id,
        name: UpdateProfileDto.name,
        description: UpdateProfileDto.description,
    };
}

// Delete profile

// @Delete(':id')
// @HttpCode(HttpStatus.ok)
// remove(@Param('id')id: string){};
@Delete(':id')
@HttpCode(HttpStatus.OK)
remove(@Param('id') id: string) {
  return {
    message: `Profile with id ${id} has been deleted.`,

  };
}
}







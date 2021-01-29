import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies') // url의 entry point를 컨드롤 함
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies';
    }

    @Get('Search')
    search(@Query("year") seachingYear: string){
        return `We arer searching for a movie with a title: ${seachingYear}`;
    }

    // 파라미터를 이용해서 원하는 무비를 요청함
    @Get("/:id")
    getOne(@Param('id') movieId:string){
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        //return 'This will create a movie';
        return movieData;
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string ){
        return `This will delete a movie with the id: ${movieId}`;
    }

    //@Put() : 모든 데이터 전체 업데이트
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateDate){
        return {
            updateedMovie : movieId,
            ...updateDate,
        };
    }
}

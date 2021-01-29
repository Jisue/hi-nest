import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // url의 entry point를 컨드롤 함
export class MoviesController {
    constructor(private readonly moviesService:MoviesService){}

    @Get()
    getAll() : Movie[]{
        return this.moviesService.getAll();
        //return 'This will return all movies';
    }

    // @Get('Search')
    // search(@Query("year") seachingYear: string){
    //     return `We arer searching for a movie with a title: ${seachingYear}`;
    // }

    // 파라미터를 이용해서 원하는 무비를 요청함
    @Get("/:id")
    getOne(@Param('id') movieId:string){
        return this.moviesService.getOne(movieId);
        //return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        //return 'This will create a movie';
        //return movieData;
        return this.moviesService.create(movieData);

    }

    @Delete("/:id")
    remove(@Param('id') movieId:string ){
        //return `This will delete a movie with the id: ${movieId}`;
        return this.moviesService.deleteOne(movieId);
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

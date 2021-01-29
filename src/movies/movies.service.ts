import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies; // 진짜 db에서는 query를 사용
    }

    getOne(id: string):Movie{
        return this.movies.find(movie => movie.id === +id); //string -> int
    }

    deleteOne(id: string): boolean{
        this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }
}
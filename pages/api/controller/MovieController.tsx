import * as movie from '../model/Movie';

export async function createMovie(name: string, releaseDate: number) {
    try {
        const movieByName = movie.findMovieByNameModel(name);

        if (movieByName != undefined) {
            return { message: 'Movie already exists'};
        }

        const response = await movie.createMovieModel(name, releaseDate);
        return response;

    } catch (error) {
        return { message: 'Something went Wrong'};
    }
}

export async function findMovieByName(name: string) {
    try {
        const movieByName = await movie.findMovieByNameModel(name);
        if (movieByName == undefined) {
            return { message: 'Movie Not Found'};
        }

        return movieByName;

    } catch (error) {
        return { message: 'Something went Wrong'};        
    }
}

export async function selectMovies() {
    try {
        const movies = await movie.selectMoviesModel();
        return movies;

    } catch (error) {
        return { message: 'Something went Wrong'};
    }
}

export async function deleteMovie(id: number) {
    try {
        const movie = await movie
        
    } catch (error) {
        return { message: 'Something went Wrong'};
    }
}
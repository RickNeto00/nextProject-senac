import { prisma } from "@/db";

export async function createMovieModel(name: string, releaseDate: number) {
    const movie = prisma.movie.create({
        data: {
            name: name,
            releaseDate: releaseDate
        }
    });

    return movie;
};

export async function findMovieByNameModel(name: string) {
    const movie = prisma.movie.findUnique({
        where: {
            name: name
        }
    });
    return movie;
}

export async function findMovieByIdModel(id: number) {
    const movie = prisma.movie.findUnique({
        where: {
            id: id
        }
    });
    return movie;
}

export async function selectMoviesModel() {
    const movies = prisma.movie.findMany();
    return movies;
}

export async function deleteMovieModel(id: number) {
    const movie = prisma.movie.delete({
        where: {
            id: id
        }
    });

    return movie;
}
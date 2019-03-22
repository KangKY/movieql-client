import ggl from 'graphql-tag'

export const HOME_PAGE = ggl`
    query {
        movies(limit: 50, rating: 7) {
            id
            title
            genres
            rating
            medium_cover_image
        }
    }
`

export const MOVIE_DETAILS = ggl`
query getMovieDetails($movieId: Int!) {
    movie(id:$movieId) {
        title
        medium_cover_image
        description_intro
        language
        genres
    }
    suggestions(id:$movieId) {
        id
        medium_cover_image
        title
        rating
    }
}
`;


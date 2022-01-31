export const MOVIES_API_KEY = '8c5f561dacc3f93269c0996b4ea12a2e'
export const MOVIES_API_URL = 'https://api.themoviedb.org/3/'
// Request example https://api.themoviedb.org/3/movie/550?api_key=8c5f561dacc3f93269c0996b4ea12a2e

export const MOVIES_OPTIONS = {
    nowPlaying: { value: 'now_playing', label: 'Now Playing' },
    popular: { value: 'popular', label: 'Popular' },
    topRated: { value: 'top_rated', label: 'Top Rated' },
    upcoming: { value: 'upcoming', label: 'Upcoming' },
}

export const SEARCH_OPTIONS = {
    movie: { value: 'movie', label: 'Movies' },
    tv: { value: 'tv', label: 'TV Shows' },
    multi: { value: 'multi', label: 'All' },
}

export const TV_SHOWS_OPTIONS = {
    airingToday: { value: 'airing_today', label: 'Airing Today' },
    onTheAir: { value: 'on_the_air', label: 'On the Air' },
    popular: { value: 'popular', label: 'Popular' },
    topRated: { value: 'top_rated', label: 'Top Rated' },
}

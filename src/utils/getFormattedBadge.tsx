export type BadgeProps =
'world' |
'health' |
'taylorSwift' |
'moviePodcast' |
'podcast' |
'movies' |
'beauty' |
'games' |
'comics' |
'books' |
'travel';

export const getFormattedBadge = (type: BadgeProps) => {
  const badgeTypes = {
    world: {
      title: 'world',
      color: '#003d80',
    },

    health: {
      title: 'health',
      color: '#0096c7',
    },

    taylorSwift: {
      title: 'taylor swift',
      color: '#7f2d7a',
    },

    moviePodcast: {
      title: 'movie podcast',
      color: '#15312c',
    },

    podcast: {
      title: 'podcast',
      color: '#FFC00E',
    },

    movies: {
      title: 'movies',
      color: '#9d0208',
    },

    beauty: {
      title: 'beauty',
      color: '#ff0a54',
    },

    games: {
      title: 'games',
      color: '#343a40',
    },

    comics: {
      title: 'comics',
      color: '#dd0426',
    },

    books: {
      title: 'books',
      color: '#99582a',
    },

    travel: {
      title: 'travel',
      color: '#fb5607',
    },
  };

  return badgeTypes[type];
};

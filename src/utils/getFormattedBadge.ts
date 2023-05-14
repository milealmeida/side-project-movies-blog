export type BadgeProps =
'world' |
'cat' |
'dog' |
'pet' |
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
      name: 'world',
      color: '#003d80',
    },

    cat: {
      name: 'cat',
      color: '#0096c7',
    },

    dog: {
      name: 'dog',
      color: '#7f2d7a',
    },

    pet: {
      name: 'pet',
      color: '#15312c',
    },

    podcast: {
      name: 'podcast',
      color: '#FFC00E',
    },

    movies: {
      name: 'movies',
      color: '#9d0208',
    },

    beauty: {
      name: 'beauty',
      color: '#ff0a54',
    },

    games: {
      name: 'games',
      color: '#343a40',
    },

    comics: {
      name: 'comics',
      color: '#dd0426',
    },

    books: {
      name: 'books',
      color: '#99582a',
    },

    travel: {
      name: 'travel',
      color: '#fb5607',
    },
  };

  return badgeTypes[type];
};

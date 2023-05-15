const capitalizedFirstLetter = (letter: string): string => {
  const capitalized = letter.charAt(0).toUpperCase() + letter.slice(1);

  return capitalized;
};

const exceptionPrepositions = ['das', 'des', 'dos', 'da', 'de', 'do', 'del'];

export const getFormattedCapitalizeName = (name: string): string => {
  const arrrayName = name.split(' ');

  const formattedName = arrrayName.map((preposition) => {
    if (exceptionPrepositions.includes(preposition)) {
      return preposition.toLocaleLowerCase();
    }

    return capitalizedFirstLetter(preposition);
  });

  return formattedName.join(' ');
};

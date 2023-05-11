export const getShortTitle = (title: string) => {
  if (title.length > 50) {
    const formattedTitle = `${title.substring(0, 50)}...`;

    return formattedTitle;
  }

  return title;
};

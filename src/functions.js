const getLocation = () => {
  const search = document.getElementById('searchBar');
  const location = search.value;
  return location;
};

const noDecimal = (element) => Math.ceil(element);

const capitalize = (mySentence) => {
  const words = mySentence.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
};

export { getLocation, noDecimal, capitalize };

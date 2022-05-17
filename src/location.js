const getLocation = () => {
  const search = document.getElementById('searchBar');
  const location = search.value;
  return location;
};

export { getLocation };

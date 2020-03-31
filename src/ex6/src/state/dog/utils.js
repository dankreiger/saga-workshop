export const api = (breed, options = {}) =>
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`, options).then(res =>
    res.json()
  );

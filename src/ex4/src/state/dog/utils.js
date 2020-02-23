
export const api = url => fetch(url).then(res => res.json());
export const dogUrl = 'https://dog.ceo/api/breeds/image/random';
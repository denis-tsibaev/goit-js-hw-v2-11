export default async function fetchApi(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '22318307-8fc961fa8d00a621cd6d86864';
  const queryStringOptions =
    'image_type=photo&orientation=horizontal&safesearch=true';

  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&${queryStringOptions}&page=1&per_page=6`
  );
  const data = await response.json();
  console.log('data: ', data);
  return data;
}

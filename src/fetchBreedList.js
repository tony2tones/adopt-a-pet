const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  console.log('The query key ', animal);
  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  console.log('Whats in the animal ', animal)

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;

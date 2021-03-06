const { SEARCH_API_URL } = process.env;

export async function searchForTitle(title) {
  if (!title.trim()) return;
  try {
    const res = await fetch(`${SEARCH_API_URL}/${title}`)
    const { results } = await res.json();
    return results;
  } catch (err) {
    console.error(err);
  }
}
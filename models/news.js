export async function fetchNews({ category = 'good', pageNumber = 1, pageSize = 20 } = {}) {
    const requestUrl = `https://cnodejs.org/api/v1/topics?page=${pageNumber}&limit=${pageSize}&tab=${category}`;
    const response = await fetch(requestUrl);
    const result = await response.json();
    return result;
}
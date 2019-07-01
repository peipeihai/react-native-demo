export async function fetchNews({ category = 'good', pageNumber = 1, pageSize = 20 } = {}) {
    const requestUrl = `https://cnodejs.org/api/v1/topics?page=${pageNumber}&limit=${pageSize}&tab=${category}`;
    const response = await fetch(requestUrl);
    const result = await response.json();

    console.log(result);

    return result;
}

export async function getNewsDetail({ newsId }) {
    const requestUrl = `https://cnodejs.org/api/v1/topic/${newsId}`;
    const response = await fetch(requestUrl);
    const result = await response.json();

    console.log(result);

    return result;
}
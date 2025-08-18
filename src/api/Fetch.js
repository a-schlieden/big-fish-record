
const FISCH_URL = 'https://689b3be9e727e9657f644977.mockapi.io/data/';

async function fischRecordsFetch(url = '') {
    const response = await fetch(url);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchRecords() {
    return fischRecordsFetch(`${FISCH_URL}`);
}






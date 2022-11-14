const baseURL = 'https://www.breakingbadapi.com/api'

export const fetchCharacters = () => {
    return fetch(`${baseURL}/characters`).then(res => res.json());
}

export const fetchCharacterDetail = (id) => {
    return fetch(`${baseURL}/characters/${id}`).then(res => res.json());
}

export async function getNews() {
    const url = 'https://games-details.p.rapidapi.com/news/announcements/3240220?limit=10&offset=0';
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '620e7b4c35msh85deae73d14589cp1e3be7jsnc7196bcee00c',
            'x-rapidapi-host': 'games-details.p.rapidapi.com'
        }
    }
    
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data.news;
}

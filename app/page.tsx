
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
export default function Home() {
    console.log(result);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h3 className="text-2xl font-bold">Welcome to Next.js!</h3>
            </main>
        </div>
    );
}

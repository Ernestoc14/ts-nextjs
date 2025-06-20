import { getNews } from "@/actions/getNews.actions"
import { NewsItemType } from "@/types";

export default async function NewsHub() {
    const news = await getNews();
    console.log(news);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <ul className="w-full max-w-2xl flex flex-col gap-4 max-h-[80vh]">
                {news.map((newsItem: NewsItemType) => (
                    <li key={newsItem.content} className='flex flex-col gap-2 p-4 border-b border-gray-200'>
                        <h1 className='text-lg font-bold'>{newsItem.news_title}</h1>
                        <h3 className="text-sm text-gray-400">{newsItem.content.slice(0, 250)}{newsItem.content.length > 250 ? "..." : ""}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}
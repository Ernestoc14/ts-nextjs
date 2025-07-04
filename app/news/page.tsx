import NewsHub from '../../components/NewsHub'

export default function News() {
    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <h2 className='text-3xl font-bold'>Latest News</h2>
            <NewsHub />
        </div>
    )
}
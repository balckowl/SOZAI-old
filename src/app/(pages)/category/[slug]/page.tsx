import Pagination from "@/app/components/Pagination/Pagination";
import SozaiList from "@/app/components/SozaiList/SozaiList"
import { getCategoryList, getList } from "@/libs/microcms"

export const generateMetadata = async ({ params }: { params: {slug: string}}) => {

    const { slug } = params
    const Category = await getCategoryList({ filters: `id[equals]${slug}` })

    return {
        title: `SOZAI | カテゴリー「${Category.contents[0]?.name}」`,
        description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
        openGraph: {
            title: 'SOZAI',
            description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/category/${Category.contents[0]?.id}`,
            siteName: 'SOZAI',
            images: [
                {
                    width: '1200',
                    height: '630',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/ogp/home-ogp.png`
                }
            ],
            locale: 'jp',
            type: 'article',
        }
    }
}

const CategoryDetail = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page: string } }) => {

    const { slug } = params


    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const limit = 9;
    const offset = (page - 1) * limit;
    const Sozaies = await getList({ filters: `category[contains]${slug}`, limit, offset })
    const Category = await getCategoryList({ filters: `id[equals]${slug}` })

    return (
        <div>
            <SozaiList title={Category.contents[0]?.name} contents={Sozaies.contents} />
            <Pagination currentPage={page} totalCount={Sozaies.totalCount} limit={limit} />
        </div>
    )
}

export default CategoryDetail
import CategoryList from "@/app/components/CategoryList/CategoryList"
import DownloadBtn from "@/app/components/DownloadBtn/DownloadBtn"
import SozaiHeader from "@/app/components/SozaiHeader/SozaiHeader"
import { Sozai, getList, getSozaiDetail } from "@/libs/microcms"
import Image from "next/image"

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {

    const { slug } = params
    const SozaiDetail = await getSozaiDetail(slug)

    return {
        title: `SOZAI | ${SozaiDetail.name}`,
        description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
        openGraph: {
            title: `SOZAI | ${SozaiDetail.name}`,
            description: 'AIで作ったフリー素材。どんな場面でも合わせやすい素材。PNG、JPG、WEBP、SVG形式でのダウンロードが可能。',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/sozai/${SozaiDetail.id}`,
            siteName: 'SOZAI',
            images: [
                {
                    width: '700',
                    height: '700',
                    url: `${SozaiDetail.material.url}`
                }
            ],
            locale: 'jp',
            type: 'article',
        }
    }
}

//ssgの設定
export const dynamicParams = false

export async function generateStaticParams() {

    let offset = 0;
    const limit = 10;
    let allSozaies: Sozai[] = []
    let totalCount = 0;

    do {
        const response = await getList({ limit: limit, offset: offset });
        allSozaies = allSozaies.concat(response.contents)
        totalCount = response.totalCount;
        offset += limit;
    } while (allSozaies.length < totalCount)

    return allSozaies.map(sozai => ({
        slug: sozai.id
    }))
}

const SozaiDetail = async ({ params }: { params: { slug: string } }) => {

    const { slug } = params

    const categories = [
        { name: "動物", image: { url: "/images/free/cat.png" }, engname: "animal" },
    ]

    const tags = [
        { name: "ねこ", engname: "cat" },
        { name: "フルーツ", engname: "fruits" }
    ]

    const SozaiDetail = await getSozaiDetail(slug)

    return (
        <div>
            {/* <p>{slug}</p> */}
            <div className="container mx-auto py-[35px] px-[15px]">
                <SozaiHeader name={SozaiDetail.name} category={SozaiDetail.category} tags={SozaiDetail.tags} id={SozaiDetail.id} />
                <div className="grid lg:grid-cols-2 grid-rows-4 gap-3 lg:gap-[70px]">
                    <div className="col-span-1 row-span-4 p-[30px] border-2 rounded-xl">
                        <Image src={SozaiDetail.material.url} width={700} height={700} alt="" className="w-full" />
                    </div>
                    <div className="col-span-1 row-span-3 bg-[#eee] flex justify-center items-center h-[300px] lg:h-full">
                        <p className="xl:text-[50px]">Adsense</p>
                    </div>
                    <DownloadBtn url={SozaiDetail.material.url} name={SozaiDetail.name} />
                </div>
            </div>
        </div>
    )
}

export default SozaiDetail
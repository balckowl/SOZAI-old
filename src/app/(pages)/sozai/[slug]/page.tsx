import CategoryList from "@/app/components/CategoryList/CategoryList"
import TagList from "@/app/components/TagList/TagList"
import { getSozaiDetail } from "@/libs/microcms"
import { Download } from "lucide-react"
import Image from "next/image"

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
            <div className="container mx-auto py-[35px]">
                <h2 className="text-[30px] font-bold mb-[10px]">{SozaiDetail.name}</h2>
                <div className="mb-[30px] flex items-center gap-3">
                    <CategoryList contents={SozaiDetail.category} />
                    <TagList contents={SozaiDetail.tags} />
                </div>
                <div className="grid grid-cols-2 grid-rows-4 gap-5">
                    <div className="col-span-1 row-span-4 p-[30px] border-2 rounded-xl">
                        <Image src={SozaiDetail.material.url} width={500} height={500} alt="" className="w-full" />
                    </div>
                    <div className="col-span-1 row-span-3 bg-[#eee] flex justify-center items-center">
                        <p className="text-[50px]">Adsense</p>
                    </div>
                    <div className="col-span-1 row-span-1 flex items-center justify-center gap-3">
                        <button className="bg-black text-white py-[14px] px-[90px] rounded-sm flex gap-2 items-center">
                            <Download width={18} height={18} />
                            <p className="text-[15px]">PNG</p>
                        </button>
                        <button className="bg-black text-white py-[14px] px-[90px] rounded-sm flex gap-2 items-center">
                            <Download width={18} height={18} />
                            <p className="text-[15px]">JPG</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SozaiDetail
import { ArrowLeft, ArrowRight } from "lucide-react"
import SozaiCard from "../SozaiCard/SozaiCard"
import Link from "next/link"
import Pagination from "../Pagination/Pagination"

const SozaiList = (
    { title, contents, isHome = false, currentPage, totalCount, limit }:
        { title: string, contents: any, isHome?: boolean, currentPage: number, totalCount: number, limit: number }
) => {

    const Sozaies = [
        { src: "/images/free/cat.png", name: "こっちをじっと見つめる黒猫", href: "/sozai/111" },
        { src: "/images/free/lemon.png", name: "レモン", href: "/sozai/121" },
        { src: "/images/free/car.png", name: "赤い車", href: "/sozai/121" },
        { src: "/images/free/bird.png", name: "小鳥", href: "/sozai/121" },
    ]

    return (
        <div className="bg-[#eee]">
            <div className="container mx-auto py-[50px] md:py-[100px] px-[15px]">
                <h2 className="font-bold text-[20px] md:text-[25px] mb-[10px]">{title}</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3  gap-[10px] md:gap-[100px]">
                    {contents.map((sozai: any) => (
                        <SozaiCard src={sozai.material.url} name={sozai.name} href={sozai.id} />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-[15px]">
                {isHome && <div className="flex justify-center pb-[100px]">
                    <Link href="/all-sozai">
                        <button className="bg-black text-white py-[20px] px-[60px] rounded-md flex items-center gap-2">
                            <p className="text-[13px]">すべてのイラストを見る</p>
                            <ArrowRight width={18} height={18}/>
                        </button>
                    </Link>
                </div>}
            </div>

            {/* {!isHome && <div className="flex justify-center items-center pb-[100px] gap-3">
                {currentPage > 1 && (
                    <Link href={`?page=${currentPage - 1}`}>
                        <button className="bg-black text-white w-[50px] h-[50px] rounded-md flex justify-center items-center gap-2">
                            <ArrowLeft />
                        </button>
                    </Link>
                )}
                <div>{currentPage}/{totalPages}</div>
                {currentPage < totalPages && (
                    <Link href={`?page=${currentPage + 1}`}>
                        <button className="bg-black text-white w-[50px] h-[50px] rounded-md flex justify-center items-center gap-2">
                            <ArrowRight />
                        </button>
                    </Link>
                )}
            </div>} */}

            {!isHome && <Pagination totalCount={totalCount} currentPage={currentPage} limit={limit} />}
        </div>
    )
}

export default SozaiList
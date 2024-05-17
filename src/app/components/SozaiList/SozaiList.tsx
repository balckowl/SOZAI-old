"use client"
import { ChevronRight } from "lucide-react"
import SozaiCard from "../SozaiCard/SozaiCard"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Loading } from "@yamada-ui/react"

const SozaiList = (
    { title, contents, isHome = false }:
        { title: string, contents: any, isHome?: boolean }
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
                {!isHome && <div className="mb-[5px]">
                    <Breadcrumb
                        separator={<ChevronRight size={15} />}
                        gap={"sm"}
                        className="text-[12px]"
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage={true}>
                            <BreadcrumbLink href="/">{title}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>}
                <h2 className="font-bold text-[20px] md:text-[30px] mb-[20px] flex items-center gap-2">
                    {/* <Tag /> */}
                    <p>{title}</p>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[10px] md:gap-[100px]">
                    {contents?.map((sozai: any) => (
                        <SozaiCard src={sozai.material.url} name={sozai.name} href={sozai.id} id={sozai.id} key={sozai.id}/>
                    ))}
                </div>
                {contents?.length == 0 && <div className="bg-[#fdf5ef] py-[6px] px-[6px] text-[15px]">このページにSOZAIはありません。</div>}
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
        </div>
    )
}

export default SozaiList
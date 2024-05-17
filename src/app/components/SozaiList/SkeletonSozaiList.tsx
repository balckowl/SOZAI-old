"use client"
import { ChevronRight } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@yamada-ui/react"
import SkeletonSozaiCard from "../SozaiCard/SkeletonSozaiCard"

const SkeletenSozaiList = (
    { title, contents }:
        { title: string, contents: any }
) => {

    return (
        <div className="bg-[#eee]">
            <div className="container mx-auto py-[50px] md:py-[100px] px-[15px]">
                <div className="mb-[5px]">
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
                </div>
                <h2 className="font-bold text-[20px] md:text-[30px] mb-[20px] flex items-center gap-2">
                    {/* <Tag /> */}
                    <p>{title}</p>
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3  gap-[10px] md:gap-[100px]">
                    {[0, 1, 2, 3]?.map(() => (
                        <SkeletonSozaiCard />
                    ))}
                </div>
                {!contents && <div>お気に入りに登録されていません。</div>}
            </div>
        </div>
    )
}

export default SkeletenSozaiList
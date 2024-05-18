"use client"

import { store } from "@/store/store"
import CategoryList from "../CategoryList/CategoryList"
import TagList from "../TagList/TagList"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@yamada-ui/react"
import { ChevronRight } from "lucide-react"

const SozaiHeader = ({ name, category, tags, id }: { name: string, category: any, tags: any, id: string }) => {

    const { likedIds } = store()

    return (
        <div>
            <div className="mb-[5px]">
                <Breadcrumb
                    separator={<ChevronRight size={15} />}
                    gap={"sm"}
                    className="text-[12px]"
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/category/${category[0]?.id}`}>{category[0]?.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage={true}>
                        <BreadcrumbLink>{name}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="flex items-center justify-between gap-2 mb-[10px]">
                <h2 className="text-[25px] sm:text-[30px] font-bold">
                    {name}
                </h2>
            </div>
            <div className="mb-[30px] flex-col flex sm:flex-row sm:items-center gap-3">
                <CategoryList contents={category} />
                <TagList contents={tags} />
            </div>
        </div>
    )
}

export default SozaiHeader
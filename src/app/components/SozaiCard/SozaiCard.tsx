"use client"
import Image from "next/image"
import Link from "next/link"
import Star from "../Star/Star"
import { store } from "@/store/store"

const SozaiCard = ({ src, name, href, id }: { src: string, name: string, href: string, id: string }) => {

    const { likedIds } = store()

    return (
        <div className="col-span-1">
            <Link href={`/sozai/${href}`}>
                <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-gray-50">
                    <Image src={src} width={500} height={500} alt="cat" className="w-full" fetchPriority="high" />
                </div>
            </Link>
            <div className="flex items-center justify-between">
                <p className="text-[14px] md:text-[16px]">{name}</p>
                <Star isLiked={likedIds.includes(id)} id={id} />
            </div>
        </div>
    )
}

export default SozaiCard
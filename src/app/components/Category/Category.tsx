import Image from "next/image"
import Link from "next/link"

const Category = ({ src, name, href }: { src: string, name: string, href: string }) => {
    return (
        <Link href={`/category/${href}`}>
            <div className="border-[1px] px-3 py-2 rounded-[20px] flex items-center gap-2">
                <div className="rounded-full border-2">
                    <Image src={src} width={20} height={20} alt="" className="rounded-full" />
                </div>
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default Category
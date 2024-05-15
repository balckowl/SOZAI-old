import Image from "next/image"
import Link from "next/link"

const SozaiCard = ({ src, name, href }: { src: string, name: string, href:string }) => {

    return (
        <div className="col-span-1">
            <Link href={`/sozai/${href}`}>
                <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-gray-50">
                    <Image src={src} width={100} height={100} alt="cat" className="w-full" />
                </div>
            </Link>
            <p>{name}</p>
        </div>
    )
}

export default SozaiCard
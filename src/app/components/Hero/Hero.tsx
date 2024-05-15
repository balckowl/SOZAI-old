import Image from "next/image"
import CategoryList from "../CategoryList/CategoryList"
import { getCategoryList } from "@/libs/microcms"

const Hero = async () => {
    const Categories = await getCategoryList()
    console.log(Categories)
    return (
        <div className="h-[calc(100vh-80px)]">
            <Image src="/images/hero.png" width={1000} height={500} alt="" className="w-full h-[70%] object-cover" />
            <div className="h-[30%]">
                <div className="container mx-auto h-full flex items-center">
                    <CategoryList contents={Categories.contents}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
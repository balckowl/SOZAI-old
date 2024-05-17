import Image from "next/image"
import CategoryList from "../CategoryList/CategoryList"
import { getCategoryList } from "@/libs/microcms"

const Hero = async () => {
    const Categories = await getCategoryList()
    return (
        <div className="h-[calc(100vh-80px)]">
            <Image src="/images/hero-2.png" width={3000} height={1000} alt="" className="w-full h-[100%] object-cover" />
            {/* <div className="h-[30%]">
                <div className="container mx-auto h-full flex items-center px-[15px]">
                    <CategoryList contents={Categories.contents}/>
                </div>
            </div> */}
        </div>
    )
}

export default Hero
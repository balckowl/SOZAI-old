import { getAllCategoryList, getAllTagList, getCategoryList, getTagList } from "@/libs/microcms"
import CategorList from "../CategoryList/CategoryList"
import TagList from "../TagList/TagList"

const Footer = async () => {
    const Categories = await getAllCategoryList()
    const Tags = await getAllTagList()

    return (
        <div id="footer">
            <div className="container mx-auto py-[50px] md:py-[100px] px-[15px]">
                <h2 className="font-bold text-[20px] md:text-[25px] mb-[30px]">キーワードから探す</h2>
                <div className="mb-[30px]">
                    <CategorList contents={Categories}/>
                </div>
                <div className="mb-[20px]">
                    <TagList contents={Tags}/>
                </div>
                <div className="h-[200px] w-full bg-[#eee] mb-[20px] flex items-center justify-center">
                    <p>Adsense</p>
                </div>
                <div className="border-t-[1px] border-[#eee] py-[20px]">
                    <p className="text-right text-[12px]">&copy; SOZAI 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
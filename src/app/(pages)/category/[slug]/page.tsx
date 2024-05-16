import SozaiList from "@/app/components/SozaiList/SozaiList"
import { getCategoryList, getList } from "@/libs/microcms"

const CategoryDetail = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page: string } }) => {

    const { slug } = params


    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const limit = 3; 
    const offset = (page - 1) * limit;
    const Sozaies = await getList({ filters: `category[contains]${slug}`, limit, offset })
    const Category = await getCategoryList({ filters: `id[equals]${slug}`, limit, offset })

    return (
        <div>
            <SozaiList title={Category.contents[0].name} contents={Sozaies.contents} currentPage={page} totalCount={Sozaies.totalCount} limit={limit} />
        </div>
    )
}

export default CategoryDetail
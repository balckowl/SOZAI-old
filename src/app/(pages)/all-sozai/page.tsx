import Pagination from "@/app/components/Pagination/Pagination";
import SozaiList from "@/app/components/SozaiList/SozaiList"
import { getList } from "@/libs/microcms"

const AllSozai = async ({ searchParams }: { searchParams: { page: string } }) => {

    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const limit = 9;
    const offset = (page - 1) * limit;
    const Sozaies = await getList({limit, offset})

    console.log(searchParams.page)

    return (
        <div>
            <SozaiList title="SOZAI一覧" contents={Sozaies.contents} />
            <Pagination currentPage={page} totalCount={Sozaies.totalCount} limit={limit}/>
        </div>
    )
}

export default AllSozai
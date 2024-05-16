import SozaiList from "@/app/components/SozaiList/SozaiList"
import { getList } from "@/libs/microcms"

const TagDetail = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page: string } }) => {

    const { slug } = params

    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const limit = 3; // 1ページあたりのアイテム数
    const offset = (page - 1) * limit;
    const tags = await getList({ filters: `tags[contains]${slug}`, limit, offset })

    return (
        <SozaiList title={slug} contents={tags.contents} currentPage={page} totalCount={tags.totalCount} limit={limit} />
    )
}

export default TagDetail
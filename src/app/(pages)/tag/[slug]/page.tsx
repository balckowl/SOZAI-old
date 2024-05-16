import SozaiList from "@/app/components/SozaiList/SozaiList"
import { getList, getTagList } from "@/libs/microcms"

const TagDetail = async ({ params, searchParams }: { params: { slug: string }, searchParams: { page: string } }) => {

    const { slug } = params

    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const limit = 3; // 1ページあたりのアイテム数
    const offset = (page - 1) * limit;
    const Sozaies = await getList({ filters: `tags[contains]${slug}`, limit, offset })
    const Tags = await getTagList({filters: `id[equals]${slug}`})

    return (
        <SozaiList title={Tags.contents[0].name} contents={Sozaies.contents} currentPage={page} totalCount={Sozaies.totalCount} limit={limit} />
    )
}

export default TagDetail
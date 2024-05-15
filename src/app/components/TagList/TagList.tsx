import Tags from "../Tag/Tag"

const TagList = ({contents}:{contents:any}) => {

    const tags = [
        { name: "ねこ", href: "/tag/cat" },
        { name: "フルーツ", href: "/tag/fruit" }
    ]


    return (
        <div className="flex gap-3 flex-wrap">
            {contents?.map((tag:any) => (
                <Tags name={tag.name} href={tag.engname} />
            ))}
        </div>
    )
}

export default TagList
import Category from "../Category/Category"

const CategoryList = ({contents}:{contents:any}) => {

    const Categories = [
        { name: "動物", src: "/images/free/cat.png", href: "/category/animal" },
        { name: "乗り物", src: "/images/free/car.png", href: "/category/automobile" },
        { name: "果物", src: "/images/free/lemon.png", href: "/category/lemon" }
    ]

    return (
        <div className="flex gap-3 flex-wrap">
            {contents?.map((category:any) => (
                <Category name={category.name} src={category.image.url} href={category.engname} />
            ))}
        </div>
    )
    //console.log(contents)
}

export default CategoryList
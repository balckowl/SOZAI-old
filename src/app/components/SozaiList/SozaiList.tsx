import SozaiCard from "../SozaiCard/SozaiCard"

const SozaiList = ({ title, contents }: { title: string, contents:any }) => {

    const Sozaies = [
        { src: "/images/free/cat.png", name: "こっちをじっと見つめる黒猫", href: "/sozai/111" },
        { src: "/images/free/lemon.png", name: "レモン", href: "/sozai/121" },
        { src: "/images/free/car.png", name: "赤い車", href: "/sozai/121" },
        { src: "/images/free/bird.png", name: "小鳥", href: "/sozai/121" },
    ]

    return (
        <div className="bg-[#eee]">
            <div className="container mx-auto py-[100px]">
                <h2 className="font-bold text-[25px] mb-[10px]">{title}</h2>
                <div className="grid grid-cols-3 gap-[100px]">
                    {contents.map((sozai:any) => (
                        <SozaiCard src={sozai.material.url} name={sozai.name} href={sozai.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SozaiList
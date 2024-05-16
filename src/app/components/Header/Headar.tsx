import Link from "next/link"

const Headar = () => {
    return (
        <div className="h-[80px]">
            <div className="container flex items-center justify-between mx-auto h-full px-[15px]">
                <Link href="/">
                    <h1 className="text-[30px] text-bold font-bold">SOZ<span className="text-red-300">AI</span></h1>
                </Link>
                <ul>
                    <li>カテゴリー</li>
                </ul>
            </div>
        </div>
    )
}

export default Headar
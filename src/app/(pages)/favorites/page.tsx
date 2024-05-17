"use client"
import SozaiList from "@/app/components/SozaiList/SozaiList"
import { Sozai, getList } from "@/libs/microcms"
import { store } from "@/store/store";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

const Favorites = () => {

    const searchParams = useSearchParams()
    const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string, 10) : 1;
    const limit = 9;
    const offset = (page - 1) * limit;
    const { likedIds } = store()
    const [Sozaies, setSozaies] = useState<any>({})

    const getSozaiFavoriteData = async () => {

        let data;
        if (likedIds.length > 0) {
            data = await getList({ filters: likedIds.map((id: string) => `id[equals]${id}`).join('[or]'), limit, offset })
        }else{
            data = []
        }
        setSozaies(data)
        console.log(likedIds)
    }

    useEffect(() => {
        getSozaiFavoriteData()
    }, [likedIds, page])

    return (
        <div>
            {Sozaies && <SozaiList title="お気に入り" contents={Sozaies.contents} />}
        </div>
    )
}

export default Favorites
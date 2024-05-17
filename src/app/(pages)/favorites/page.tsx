// "use client"
// import { Suspense, useEffect, useState } from 'react';
// import SozaiList from "@/app/components/SozaiList/SozaiList";
// import { getList } from "@/libs/microcms";
// import { store } from "@/store/store";
// import { useSearchParams } from 'next/navigation';

import { Construction } from "lucide-react"

// const Favorites = () => {
//     const [Sozaies, setSozaies] = useState<any>({});
//     const { likedIds } = store();

//     const searchParams = useSearchParams();
//     const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string, 10) : 1;
//     const limit = 9;
//     const offset = (page - 1) * limit;

//     const getSozaiFavoriteData = async () => {
//         let data;
//         if (likedIds.length > 0) {
//             data = await getList({ 
//                 filters: likedIds.map(id => `id[equals]${id}`).join('[or]'), 
//                 limit, 
//                 offset 
//             });
//         } else {
//             data = [];
//         }
//         setSozaies(data);
//     };

//     useEffect(() => {
//         getSozaiFavoriteData();
//     }, [likedIds, page]);

//     return (
//         <div>
//             <Suspense fallback={<div>Loading...</div>}>
//                 {Sozaies && <SozaiList title="お気に入り" contents={Sozaies.contents} />}
//             </Suspense>
//         </div>
//     );
// };

// export default Favorites;

const Favorites = () => {
    return (
        <div className="w-full min-h-[500px] bg-[#eee] flex items-center justify-center gap-3 text-[20px]">
            <Construction />
            <p>開発中</p>
            <Construction />
        </div>
    )
}

export default Favorites
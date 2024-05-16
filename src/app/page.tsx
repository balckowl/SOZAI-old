import Hero from "./components/Hero/Hero";
import SozaiList from "./components/SozaiList/SozaiList";
import { getList } from "@/libs/microcms";

export default async function Home() {

  const Sozaies = await getList({ limit: 9 })

  return (
    <>
      <Hero />
      <SozaiList title="新しいイラスト" contents={Sozaies.contents} isHome={true} totalCount={10} currentPage={10} limit={10} />
    </>
  );
}

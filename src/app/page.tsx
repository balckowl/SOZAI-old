import Hero from "./components/Hero/Hero";
import MoreSozaiBtn from "./components/MoreSozaiBtn/MoreSozaiBtn";
import SozaiList from "./components/SozaiList/SozaiList";
import { getList } from "@/libs/microcms";

export default async function Home() {

  const Sozaies = await getList({ limit: 9 })

  return (
    <>
      <Hero />
      <SozaiList title="新しいSOZAI" contents={Sozaies.contents} isHome={true}/>
      <MoreSozaiBtn />
    </>
  );
}

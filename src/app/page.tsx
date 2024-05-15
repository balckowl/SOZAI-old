import Header from "@/app/components/Header/Headar"
import Hero from "./components/Hero/Hero";
import SozaiList from "./components/SozaiList/SozaiList";
import Footer from "./components/Footer/Footer";
import { getList } from "@/libs/microcms";

export default async function Home() {
  const Sozaies = await getList()
  console.log(Sozaies)
  return (
    <>
      <Header />
      <Hero/>
      <SozaiList title="新しいイラスト" contents={Sozaies.contents} />
      <Footer />
    </>
  );
}

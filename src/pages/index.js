import Head from "next/head";
import Header from "../components/Header";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photogram</title>
        <link rel="icon" href="/fav.icon.ico"></link>
      </Head>

      <Menu />
      {/* <Header /> */}

      {/* Feed */}

      {/* Modal */}
    </div>
  );
}

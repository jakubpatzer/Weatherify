import Head from "next/head";
import Search from "@/components/Search";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weatherify</title>
        <meta name="description" content="Weather forecast app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl my-10 text-white">WEATHERIFY</h1>
          <Search />
        </div>
      </MainLayout>
    </>
  );
}

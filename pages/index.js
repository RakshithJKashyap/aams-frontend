import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Automatic attendence management system</title>
      </Head>
      <Navbar />
      <Hero />
    </>
  );
}

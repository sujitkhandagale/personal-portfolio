import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import Technology from "@/components/Technology";
import ProjectsSmall from "@/components/ProjectsSmall";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import "../styles/globals.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Sujit Khandagale</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <HomeHero />
        <Technology />
        <ProjectsSmall />
      </div>
    </>
  );
}

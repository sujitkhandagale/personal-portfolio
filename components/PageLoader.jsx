import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PreloaderScss from "./preloader.module.scss";

const PageLoader = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={PreloaderScss.page_loader}>
      <div className={PreloaderScss.loader}>HI</div>
    </div>
  );
};

export default PageLoader;

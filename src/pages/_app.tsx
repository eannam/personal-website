import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

const berkeleyMono = localFont({
  src: [
    {
      path: "../../public/fonts/BerkeleyMono-Regular.ttf",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => posthog?.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <PostHogProvider>
      <main className={berkeleyMono.className}>
        <Component {...pageProps} />
      </main>
    </PostHogProvider>
  );
}

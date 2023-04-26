import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   import("preline");
  // }, []);
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </UserProvider>
  );
}

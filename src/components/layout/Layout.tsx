import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { ParentProps } from "solid-js";

export default function Layout(props: ParentProps) {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </>
  )
}

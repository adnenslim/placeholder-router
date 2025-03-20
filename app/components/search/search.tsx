import { startTransition, useState } from "react";
import { useFetcher, useSearchParams } from "react-router";

export const InputSearch = () => {
  const [searchParams] = useSearchParams({ q: "" });
  const [search, setSearch] = useState(searchParams.get("q") ?? "");

  const fetcher = useFetcher();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData(event.target.form as HTMLFormElement);
    startTransition(() => {
      setSearch(event.target.value);
      fetcher.submit(formData, { method: "post", action: "/" });
    });
  };

  return (
    <fetcher.Form method="post" action="/">
      <div className="inline-flex items-center gap-1 relative">
        <input
          type="search"
          name="search"
          value={search}
          className={"border p-2 w-96"}
          onChange={handleChange}
          placeholder={"Search..."}
        />
        <div className="text-2xl animate-spin text-blue-700 absolute right-1">
          {fetcher.state === "loading" && "↻"}
        </div>
      </div>
    </fetcher.Form>
  );
};

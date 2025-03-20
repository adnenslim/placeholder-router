import { startTransition, useState } from "react";
import { useFetcher,  useSearchParams } from "react-router";

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
      <input
        type="search"
        name="search"
        value={search}
        className={"border p-2 w-96"}
        onChange={handleChange}
        placeholder={"Search..."}
      />
    </fetcher.Form>
  );
};

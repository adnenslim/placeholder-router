type TInputSearchProps = { setSearch: (search: string) => void };

export const InputSearch = ({ setSearch }: TInputSearchProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <input
      type="search"
      className={"border p-2 w-96"}
      onChange={onChange}
      placeholder={"Search..."}
    />
  );
};

import { useLoaderData } from "@remix-run/react";
import { data } from "autoprefixer";

export const loader = async () => {
  const name = "isu";
  return name;
};

export default function Index() {
  const bhai = useLoaderData();
  return (
    <h1 className="font-bold text-3xl underline text-cyan-400">
      Hello {bhai}!!
    </h1>
  );
}

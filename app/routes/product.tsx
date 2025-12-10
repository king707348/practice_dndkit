import type { Route } from "./+types/home";
import { Product } from "../product/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Second Router App" },
    { name: "description", content: "Welcome to second React Router!" },
  ];
}

export default function Home() {
  return <Product />
  
}
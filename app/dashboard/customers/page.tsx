import { fetchRevenue } from "@/app/lib/data";

export default async function Page() {
  const revenue = await fetchRevenue();
  const p1 = () => {
    setTimeout(() => {
      return 1
    }, 3000);
  };
  const res  = await p1();
  return <p>Customers Page</p>;
}
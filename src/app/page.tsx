import Home from "@/components/screens/home/Home";
import { IItemData } from "@/interfaces/item.interface";
import { ItemService } from "@/services/item.service";
import { GetServerSideProps, NextPage } from "next";

export const revalidate = 3600;

const HomePage: NextPage = async () => {
  const items = await ItemService.getAll();

  return (
    <>
      <Home items={items} />
    </>
  );
};

export default HomePage;

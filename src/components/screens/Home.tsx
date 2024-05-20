import SimpleItem from "@/components/ui/Item/SimpleItem";
import { IItemData } from "@/interfaces/item.interface";
import Image from "next/image";
import { FC } from "react";

const Home: FC<IItemData> = ({ items }) => {
  return (
    <div>
      <h1>Welcome to homepage!</h1>

      {items?.length ? (
        items.map((item) => <SimpleItem key={item.id} item={item} />)
      ) : (
        <div>Items not found!</div>
      )}
    </div>
  );
};

export default Home;

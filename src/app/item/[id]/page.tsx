import Home from "@/components/screens/home/Home";
import ItemDetail from "@/components/screens/item-detail/ItemDetail";
import SimpleItem from "@/components/ui/Item/SimpleItem";
import { IItemData, IItemDataSingle } from "@/interfaces/item.interface";
import { ItemService } from "@/services/item.service";
import { GetServerSideProps, NextPage } from "next";
import { notFound } from "next/navigation";
import path from "path";

export const revalidate = 3600;

const ItemPage = async ({ params }: { params: { id: string } }) => {
  const item = await ItemService.getById(Number(params?.id));

  if(!item) notFound();

  return (
    <>
      <SimpleItem item={item} />
    </>
  );
};

export const getStaticPaths = async () => {
  const items = await ItemService.getAll();

  const paths = items.map((item) => ({
    params: {
      id: String(item.id)
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export default ItemPage;

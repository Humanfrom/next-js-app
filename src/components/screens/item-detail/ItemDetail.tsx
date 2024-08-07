import Layout from "@/components/layout/Layout";
import SimpleItem from "@/components/ui/Item/SimpleItem";
import { IItemData, IItemDataSingle } from "@/interfaces/item.interface";
import { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

const ItemDetail: FC<IItemDataSingle> = ({ item }) => {
  return (
        <SimpleItem item={item}/>
  );
};

export default ItemDetail;

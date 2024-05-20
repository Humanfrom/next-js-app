import { IItemDataSingle } from "@/interfaces/item.interface";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./SimpleItem.module.scss";

const SimpleItem: FC<IItemDataSingle> = ({ item }) => {
  return (
    <div className={styles.item}>
      <Image 
        src={item.image} 
        alt={item.title} 
        width={500} 
        height={500} 
      />
      <h2>{item.title}</h2>
      <small>{item.description}</small>

      <Link href={`/item/${item.id}`}>Read more</Link>
    </div>
  );
};

export default SimpleItem;

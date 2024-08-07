export interface IItem {
    id: number;
    title: string;
    description?: string;
    image: string;
}

export interface IItemProps {
    id: number;
    title: string;
    description?: string;
    children?: any;
}

export interface IItemData {
    items: IItem[];
}

export interface IItemDataSingle {
    item: IItem;
}
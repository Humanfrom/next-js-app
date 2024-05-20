export interface IItem {
    id: number;
    title: string;
    description?: string;
    image: string;
}

export interface IItemData {
    items: IItem[];
}

export interface IItemDataSingle {
    item: IItem;
}
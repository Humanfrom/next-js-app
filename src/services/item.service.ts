import { IItem } from "@/interfaces/item.interface";
import axios from "axios"
import { title } from "process";

export const revalidate = 3600;

const mockData: IItem[] = [
    {
        id: 1,
        title: "Test 01", 
        description: 'Test description of item 01',
        image: '/01.jpg',
    },
    {
        id: 2,
        title: "Test 02", 
        description: 'This is the super individual item of this thing',
        image: '/02.jpg',
    },
    {
        id: 3,
        title: "Test 03", 
        description: 'Now we just a good eedback about it',
        image: '/03.jpg',
    }
];

export const ItemService = {
    async getAll () {
        //const { data } = await axios.get<IItem[]>('/test')
        const data = mockData;
        return data;
    },
    async getById (id: number) {
        //const { data } = await axios.get<IItem[]>(`/test?id=${id}`)
        const data = mockData;
        return data[id];
    },
}
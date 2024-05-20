import { IItem } from "@/interfaces/item.interface";
import axios from "axios"
import { title } from "process";

const mockData: IItem[] = [
    {
        id: 1,
        title: "Test 01", 
        description: 'Test description of item 01',
        image: '/public/01.jpg',
    },
    {
        id: 2,
        title: "Test 02", 
        description: 'This is the super individual item of this thing',
        image: '/public/02.jpg',
    },
    {
        id: 3,
        title: "Test 03", 
        description: 'Now we just a good eedback about it',
        image: '/public/03.jpg',
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
        return data[0];
    },
}
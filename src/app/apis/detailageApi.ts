// apiModule.ts

import axios from "axios";

export const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};

type shoppingBasketData = {
    product_option_id: number | null,
    add_amount: number
}

export const shoppingBasketAPI = async (url: string, body: shoppingBasketData, token: string) => {
    try {

        const responese = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                'Token': token
            }
        })
        return responese
    } catch (error) {
        console.error('Error', error);
        throw error;
    }

}

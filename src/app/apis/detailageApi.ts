// apiModule.ts

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
    product_option_id: number,
    user_id: number,
    amount: number
}

export const shoppingBasket = async (url: string, body: shoppingBasketData) => {
    try {

        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(body)
        })
    } catch (error) {
        console.error('Error', error);
        throw error;
    }

}

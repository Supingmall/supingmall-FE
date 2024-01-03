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
    product_option_id: number | null,
    addAmount: number
}

export const shoppingBasketAPI = async (url: string, body: shoppingBasketData, token: string) => {
    try {

        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Token: token,


            },
            method: "POST",
            body: JSON.stringify(body)
        })
    } catch (error) {
        console.error('Error', error);
        throw error;
    }

}

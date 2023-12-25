// apiModule.ts

export const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};



export const fatchData = async (url: string) => {
    const response = await fetch(url, {
        headers: "",
        method: "post",
        body: {
        }
    })
    const data = response.json()
    return data
}
type reviewData = {
    review_contents: string,
    score: number
}


// /v1/api/review/{product_id}/createReview
export const createreview = async (url: string, body: reviewData) => {
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


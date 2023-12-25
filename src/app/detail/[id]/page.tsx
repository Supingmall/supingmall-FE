import { fetchData } from "@/app/apis/detailageApi";
import DetailHead from "@/components/detail/DetailHead";
import { isDataView } from "util/types";

const Detail = async (props: any) => {

    // const url = `/v1/api/product-detail/${props.params.id}`
    const url = `http://localhost:9999/item`
    const data = await fetchData(url)
    return (
        <div>
            <div>
                {data ? <DetailHead testData={data} /> : "데이터안옴"}
            </div>
        </div>
    );
}


export default Detail;
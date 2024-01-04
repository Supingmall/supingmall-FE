"use client";
import { NaviBar } from "@/components/main/naviBar/NaviBar";
import * as S from "../../components/main/layout/MainLayout.style";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSearchItem } from "../apis/client/mainItem";
import Item from "@/components/main/Item/Item";

export default function Search() {
  const params = useSearchParams();
  const query = params.get("query") || "";
  const { data: getSearch, isError } = useQuery({
    queryKey: ["getSearchItem", query],
    queryFn: () => getSearchItem(query),
  });

  return (
    <S.MainLayout>
      {/* <NaviBar /> */}
      <S.ItemContainerWrap>
        <h2 className="search-title">
          검색어 :<span>{query}</span>
        </h2>
        <S.ItemContainer>
          {isError && <p>검색결과가 없습니다.</p>}
          {!isError &&
            getSearch?.product_list?.content.map((item) => (
              <Item key={item.product_id} item={item} />
            ))}
        </S.ItemContainer>
      </S.ItemContainerWrap>
    </S.MainLayout>
  );
}

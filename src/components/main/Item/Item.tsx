"use client";
import Image from "next/image";
import "./item.css";
import Link from "next/link";
import { Product } from "../layout/type";

export default function Item({ item }: { item: Product }) {
  return (
    <div className="item">
      <Link href={`/detail/${item.product_id}`}>
        <div className="item-img-box">
          <Image
            className="item-img"
            src={item.photo_url}
            alt={item.product_name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="meta-container">
          <div className="name">{item.product_name}</div>
          <div className="price">{item.product_price}</div>
          <div className="review-container">
            <Image
              src="/star.svg"
              alt="별점"
              layout="fixed"
              width={15}
              height={15}
            />
            <div className="score">{item.score_avg}</div>
            <div className="total">({item.review_count})</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

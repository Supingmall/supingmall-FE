import UserMenu from "../UserMenu/UserMenu";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./MyPageSideBar.module.css";

// mock 데이터 처리
const userInfo = {
  name: "이름",
  gender: "남성",
  email: "2@naver.com",
  nick_name: "닉네임12",
  password: "$2a$10$DNFErbhICGideoaNOJS1JeG4B8uzQnGChaDfAhrdftp/44aKlcuR2",
  new_password: null,
  new_password_confirm: null,
  phone_number: "01012341235",
  image_url:
    "https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_1280.jpg",
  address: "서울",
  created_at: "2023년 12월 20일 - 17시 06분",
  user_roles: ["판매자"],
};

export default function MyPageSideBar() {
  return (
    <aside className={styles.container}>
      <UserProfile imgUrl={userInfo.image_url} nickname={userInfo.nick_name} />
      <hr />
      <UserMenu userRole={userInfo.user_roles[0]} />
    </aside>
  );
}

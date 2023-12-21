import Image from "next/image";
import styles from "./UserProfile.module.css";

type UserProfileProps = {
  imgUrl: string;
  nickname: string;
};

export default function UserProfile({ imgUrl, nickname }: UserProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.img_box}>
        <Image src={imgUrl} alt="프로필사진" width={100} height={100} />
      </div>
      <p>{nickname}</p>
    </div>
  );
}

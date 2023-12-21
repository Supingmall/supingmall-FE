import Image from "next/image";
import styles from "./UserProfile.module.css";

type UserProfileProps = {
  imgUrl: string;
  nickname: string;
};

export default function UserProfile({ imgUrl, nickname }: UserProfileProps) {
  return (
    <div className={styles.container}>
      <div>
        <Image src={imgUrl} alt="프로필사진" fill={true} />
      </div>
    </div>
  );
}

import { ethers } from "ethers";
import { MissingStaticPage } from "next/dist/shared/lib/utils";
import { Message } from "../../hooks/useMessengerContract";
import styles from "./MessageCard.module.css";

type Props = {
  message: Message;
  onClickAccept: () => void;
  onClickDeny: () => void;
};

export default function MessageCard({
  message,
  onClickAccept,
  onClickDeny,
}: Props) {
  const depositInEther = ethers.utils.formatEther(message.depositInWei);

  return (
    <div className={styles.card}>
      <p className={styles.title}>from {message.sender}</p>
      <p>AVAX: {depositInEther}</p>
      <p className={styles.text}>{message.text}</p>
      {message.isPending && (
        <div className={styles.container}>
          <button className={styles.item} onClick={onClickAccept}>
            accept
          </button>
          <button className={styles.item} onClick={onClickDeny}>
            deny
          </button>
        </div>
      )}
      <p className={styles.date}>{message.timestamp.toDateString()}</p>
    </div>
  );
}
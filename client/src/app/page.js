import Image from "next/image";
import Header from "./components/header/Header";
import styles from "./page.module.css";
import Footer from "./components/footer/Footer";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.hero}>
        <div>
          <h1 className={styles.heading}>
          Where Culinary Creativity Meets Blockchain Innovation 🍴
          </h1>
          <p className={styles.description}>
          Recipe NFT Marketplace is an innovative platform that 
          leverages blockchain technology to empower food bloggers and 
          chefs by tokenizing their original recipes as NFTs. This decentralized marketplace enables 
          creators to securely mint, sell, and trade their recipes, ensuring authenticity,
          intellectual property protection, and fair monetization. 
          </p>
          <div className={styles.btns}>
            <Link
              href="/marketplace"
              className={`${styles.btn} ${styles.buyBtn}`}
            >
              Buy Now!
            </Link>
            <Link href="/sellNFT" className={styles.btn}>
              List Now!
            </Link>
          </div>
        </div>
        <Image src="/pic1.png" alt="NFTs" width={1075} height={650} />
      </div>
      <Footer />
    </div>
  );
}
import Image from "next/image"
import styles from "./ProductCard.module.css"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>${product.price}</span>
          <button className={styles.cardButton}>Añadir</button>
        </div>
      </div>
    </div>
  )
}

import Header from "@/components/Header"
import Banner from "@/components/Banner"
import Filters from "@/components/Filters"
import ProductGrid from "@/components/ProductGrid"
import Footer from "@/components/Footer"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Banner />
      <div className={styles.mainContent}>
        <div className={styles.filtersContainer}>
          <Filters />
        </div>
        <div className={styles.productsContainer}>
          <ProductGrid />
        </div>
      </div>
      <div className={styles.clearSpace}></div>
      <Footer />
    </div>
  )
}

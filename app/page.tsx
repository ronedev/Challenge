import Header from "@/components/Header"
import Banner from "@/components/Banner"
import Filters from "@/components/Filters"
import ProductGrid from "@/components/ProductGrid"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <Banner />
      <div style={{ display: "block", position: "relative" }}>
        <div style={{ float: "left", width: "250px", marginRight: "15px", paddingLeft: "5px" }}>
          <Filters />
        </div>
        <div style={{ marginLeft: "240px", paddingRight: "10px" }}>
          <ProductGrid />
        </div>
      </div>
      <div style={{ clear: "both", marginTop: "50px" }}></div>
      <Footer />
    </div>
  )
}

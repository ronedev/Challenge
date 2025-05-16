import ProductCard from "./ProductCard"

export default function ProductGrid() {
  // Array de productos de ejemplo
  const products = [
    { id: 1, name: "Producto 1", price: 19.99, image: "/abstract-product-display.png" },
    { id: 2, name: "Producto 2", price: 29.99, image: "/product-lineup-display.png" },
    { id: 3, name: "Producto 3", price: 39.99, image: "/abstract-product-3.png" },
    { id: 4, name: "Producto 4", price: 49.99, image: "/generic-product-4.png" },
    { id: 5, name: "Producto 5", price: 59.99, image: "/product-five.png" },
    { id: 6, name: "Producto 6", price: 69.99, image: "/placeholder-vzygy.png" },
    { id: 7, name: "Producto 7", price: 79.99, image: "/placeholder-k1s61.png" },
    { id: 8, name: "Producto 8", price: 89.99, image: "/placeholder-ajh58.png" },
  ]

  return (
    <div
      style={{
        marginTop: "20px",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          marginLeft: "5px",
        }}
      >
        Productos
      </h2>

      <div
        style={{
          display: "block",
          marginLeft: "-10px",
          marginRight: "-10px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              display: "inline-block",
              width: "220px",
              marginLeft: "10px",
              marginRight: "10px",
              marginBottom: "30px",
              verticalAlign: "top",
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

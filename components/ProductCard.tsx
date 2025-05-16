import Image from "next/image"

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
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
        height: "320px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          position: "relative",
        }}
      >
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill style={{ objectFit: "cover" }} />
      </div>

      <div style={{ padding: "12px 15px" }}>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "8px",
            height: "40px",
            overflow: "hidden",
          }}
        >
          {product.name}
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#e63946",
            }}
          >
            ${product.price}
          </span>

          <button
            style={{
              backgroundColor: "#457b9d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "6px 12px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

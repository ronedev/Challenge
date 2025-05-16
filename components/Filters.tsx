export default function Filters() {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "15px 10px",
        border: "1px solid #eee",
        marginTop: "20px",
        width: "230px",
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          marginBottom: "15px",
          marginTop: "5px",
        }}
      >
        Filtros
      </h3>

      <div style={{ marginBottom: "20px" }}>
        <h4
          style={{
            fontSize: "16px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          Categoría 1
        </h4>
        <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
          <li style={{ marginBottom: "8px" }}>
            <label style={{ cursor: "pointer" }}>
              <input type="checkbox" style={{ marginRight: "8px" }} />
              Subcategoría A
            </label>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <label style={{ cursor: "pointer" }}>
              <input type="checkbox" style={{ marginRight: "8px" }} />
              Subcategoría B
            </label>
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h4
          style={{
            fontSize: "16px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          Categoría 2
        </h4>
        <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
          <li style={{ marginBottom: "8px" }}>
            <label style={{ cursor: "pointer" }}>
              <input type="checkbox" style={{ marginRight: "8px" }} />
              Subcategoría C
            </label>
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h4
          style={{
            fontSize: "16px",
            marginBottom: "10px",
          }}
        >
          Precio
        </h4>
        <div style={{ paddingLeft: "15px" }}>
          <input type="range" min="0" max="1000" defaultValue="500" style={{ width: "180px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
              width: "180px",
            }}
          >
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

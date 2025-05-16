export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "table",
          width: "100%",
          tableLayout: "fixed",
        }}
      >
        <div
          style={{
            display: "table-cell",
            width: "25%",
            paddingRight: "15px",
            verticalAlign: "top",
          }}
        >
          <h4
            style={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Acerca de
          </h4>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                Nuestra Historia
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                Blog
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                Trabaja con Nosotros
              </a>
            </li>
          </ul>
        </div>

        <div
          style={{
            display: "table-cell",
            width: "25%",
            paddingLeft: "5px",
            paddingRight: "10px",
            verticalAlign: "top",
          }}
        >
          <h4
            style={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Ayuda
          </h4>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                FAQ
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                Envíos
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                Devoluciones
              </a>
            </li>
          </ul>
        </div>

        <div
          style={{
            display: "table-cell",
            width: "25%",
            paddingLeft: "10px",
            paddingRight: "5px",
            verticalAlign: "top",
          }}
        >
          <h4
            style={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Categorías
          </h4>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                Categoría 1
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                Categoría 2
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#ddd", textDecoration: "none" }}>
                Ofertas
              </a>
            </li>
          </ul>
        </div>

        <div
          style={{
            display: "table-cell",
            width: "25%",
            paddingLeft: "15px",
            verticalAlign: "top",
          }}
        >
          <h4
            style={{
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Contacto
          </h4>
          <p style={{ marginBottom: "10px" }}>info@tienda.com</p>
          <p style={{ marginBottom: "10px" }}>+1 234 567 890</p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <a
              href="#"
              style={{
                display: "inline-block",
                marginRight: "15px",
                color: "white",
              }}
            >
              FB
            </a>
            <a
              href="#"
              style={{
                display: "inline-block",
                marginRight: "15px",
                color: "white",
              }}
            >
              IG
            </a>
            <a
              href="#"
              style={{
                display: "inline-block",
                color: "white",
              }}
            >
              TW
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #555",
          marginTop: "30px",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

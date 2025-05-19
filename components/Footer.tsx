import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTable}>
        <div className={styles.footerCell}>
          <h4 className={styles.footerTitle}>Acerca de</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>Nuestra Historia</a></li>
            <li><a href="#" className={styles.footerLink}>Blog</a></li>
            <li><a href="#" className={styles.footerLink}>Trabaja con Nosotros</a></li>
          </ul>
        </div>
        <div className={styles.footerCell}>
          <h4 className={styles.footerTitle}>Ayuda</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>FAQ</a></li>
            <li><a href="#" className={styles.footerLink}>Envíos</a></li>
            <li><a href="#" className={styles.footerLink}>Devoluciones</a></li>
          </ul>
        </div>
        <div className={styles.footerCell}>
          <h4 className={styles.footerTitle}>Categorías</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>Categoría 1</a></li>
            <li><a href="#" className={styles.footerLink}>Categoría 2</a></li>
            <li><a href="#" className={styles.footerLink}>Ofertas</a></li>
          </ul>
        </div>
        <div className={styles.footerCell}>
          <h4 className={styles.footerTitle}>Contacto</h4>
          <p className={styles.footerContact}>info@tienda.com</p>
          <p className={styles.footerContact}>+1 234 567 890</p>
          <div className={styles.footerSocials}>
            <a href="#" className={styles.footerSocial}>FB</a>
            <a href="#" className={styles.footerSocial}>IG</a>
            <a href="#" className={styles.footerSocial}>TW</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

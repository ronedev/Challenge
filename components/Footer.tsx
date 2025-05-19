import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTable}>
        <section className={styles.footerCell} aria-labelledby="footer-about">
          <h4 className={styles.footerTitle} id="footer-about">Acerca de</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>Nuestra Historia</a></li>
            <li><a href="#" className={styles.footerLink}>Blog</a></li>
            <li><a href="#" className={styles.footerLink}>Trabaja con Nosotros</a></li>
          </ul>
        </section>
        <section className={styles.footerCell} aria-labelledby="footer-help">
          <h4 className={styles.footerTitle} id="footer-help">Ayuda</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>FAQ</a></li>
            <li><a href="#" className={styles.footerLink}>Envíos</a></li>
            <li><a href="#" className={styles.footerLink}>Devoluciones</a></li>
          </ul>
        </section>
        <section className={styles.footerCell} aria-labelledby="footer-categories">
          <h4 className={styles.footerTitle} id="footer-categories">Categorías</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>Categoría 1</a></li>
            <li><a href="#" className={styles.footerLink}>Categoría 2</a></li>
            <li><a href="#" className={styles.footerLink}>Ofertas</a></li>
          </ul>
        </section>
        <address className={styles.footerCell} aria-labelledby="footer-contact">
          <h4 className={styles.footerTitle} id="footer-contact">Contacto</h4>
          <p className={styles.footerContact}>info@tienda.com</p>
          <p className={styles.footerContact}>+1 234 567 890</p>
          <div className={styles.footerSocials}>
            <a href="#" className={styles.footerSocial}>FB</a>
            <a href="#" className={styles.footerSocial}>IG</a>
            <a href="#" className={styles.footerSocial}>TW</a>
          </div>
        </address>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

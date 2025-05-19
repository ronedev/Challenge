import styles from "./Filters.module.css"

export default function Filters() {
  return (
    <div className={styles.filters}>
      <h3 className={styles.filtersTitle}>Filtros</h3>
      <div className={styles.filtersSection}>
        <h4 className={styles.filtersSubtitle}>Categoría 1</h4>
        <ul className={styles.filtersList}>
          <li><label className={styles.filtersLabel}><input type="checkbox" className={styles.filtersCheckbox} />Subcategoría A</label></li>
          <li><label className={styles.filtersLabel}><input type="checkbox" className={styles.filtersCheckbox} />Subcategoría B</label></li>
        </ul>
      </div>
      <div className={styles.filtersSection}>
        <h4 className={styles.filtersSubtitle}>Categoría 2</h4>
        <ul className={styles.filtersList}>
          <li><label className={styles.filtersLabel}><input type="checkbox" className={styles.filtersCheckbox} />Subcategoría C</label></li>
        </ul>
      </div>
      <div className={styles.filtersSection}>
        <h4 className={styles.filtersSubtitle}>Precio</h4>
        <div className={styles.filtersRangeContainer}>
          <input type="range" min="0" max="1000" defaultValue="500" className={styles.filtersRange} />
          <div className={styles.filtersRangeLabels}>
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

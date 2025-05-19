import styles from "./Filters.module.css"

export default function Filters() {
  return (
    <aside className={styles.filters} aria-label="Filtros">
      <h3 className={styles.filtersTitle}>Filtros</h3>
      <fieldset className={styles.filtersSection}>
        <legend className={styles.filtersSubtitle}>Categoría 1</legend>
        <ul className={styles.filtersList}>
          <li><label className={styles.filtersLabel}><input type="checkbox" className={styles.filtersCheckbox} />Subcategoría A</label></li>
          <li><label className={styles.filtersLabel}><input type="checkbox" className={styles.filtersCheckbox} />Subcategoría B</label></li>
        </ul>
      </fieldset>
      <fieldset className={styles.filtersSection}>
        <legend className={styles.filtersSubtitle}>Categoría 2</legend>
        <ul className={styles.filtersList}>
          <li><label className={styles.filtersLabel}><input type="checkbox" className={styles.filtersCheckbox} />Subcategoría C</label></li>
        </ul>
      </fieldset>
      <fieldset className={styles.filtersSection}>
        <legend className={styles.filtersSubtitle}>Precio</legend>
        <div className={styles.filtersRangeContainer}>
          <input type="range" min="0" max="1000" defaultValue="500" className={styles.filtersRange} />
          <div className={styles.filtersRangeLabels}>
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </fieldset>
    </aside>
  )
}

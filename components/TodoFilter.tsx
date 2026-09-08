'use client';

import styles from './TodoFilter.module.css';

type FilterType = 'all' | 'active' | 'completed';
type SortType = 'date' | 'priority';

interface TodoFilterProps {
  currentFilter: FilterType;
  currentSort: SortType;
  onFilterChange: (filter: FilterType) => void;
  onSortChange: (sort: SortType) => void;
}

export default function TodoFilter({
  currentFilter,
  currentSort,
  onFilterChange,
  onSortChange,
}: TodoFilterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.filterGroup}>
        <span className={styles.label}>Filter:</span>
        <div className={styles.buttons}>
          {(['all', 'active', 'completed'] as const).map((filter) => (
            <button
              key={filter}
              className={`${styles.btn} ${currentFilter === filter ? styles.active : ''}`}
              onClick={() => onFilterChange(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.sortGroup}>
        <span className={styles.label}>Sort by:</span>
        <select
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value as SortType)}
          className={styles.select}
        >
          <option value="date">Date Added</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
}
'use client';

import { TodoItem } from './TodoApp';
import styles from './TodoStats.module.css';

interface TodoStatsProps {
  todos: TodoItem[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const highPriority = todos.filter((t) => t.priority === 'high' && !t.completed).length;

  const completionPercentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className={styles.stats}>
      <h3 className={styles.title}>Statistics</h3>
      
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <p className={styles.progressText}>{completionPercentage}% Complete</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{total}</div>
          <div className={styles.statLabel}>Total Tasks</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statValue} ${styles.active}`}>{active}</div>
          <div className={styles.statLabel}>Active</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statValue} ${styles.completed}`}>{completed}</div>
          <div className={styles.statLabel}>Completed</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statValue} ${styles.urgent}`}>{highPriority}</div>
          <div className={styles.statLabel}>Urgent</div>
        </div>
      </div>
    </div>
  );
}
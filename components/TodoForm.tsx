'use client';

import { useState } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onAdd: (text: string, priority: 'low' | 'medium' | 'high', dueDate?: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim(), priority, dueDate || undefined);
      setInput('');
      setPriority('medium');
      setDueDate('');
      setIsExpanded(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2>Add New Task</h2>
      </div>

      <div className={styles.formGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className={styles.input}
          autoFocus
        />
      </div>

      <div className={`${styles.expandable} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Priority</label>
          <div className={styles.priorityButtons}>
            {(['low', 'medium', 'high'] as const).map((p) => (
              <button
                key={p}
                type="button"
                className={`${styles.priorityBtn} ${styles[`priority-${p}`]} ${
                  priority === p ? styles.active : ''
                }`}
                onClick={() => setPriority(p)}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="dueDate">
            Due Date (optional)
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={styles.dateInput}
          />
        </div>
      </div>

      <button
        type="button"
        className={styles.expandBtn}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '▼' : '▶'} More options
      </button>

      <button type="submit" className={styles.submitBtn}>
        ✓ Add Task
      </button>
    </form>
  );
}
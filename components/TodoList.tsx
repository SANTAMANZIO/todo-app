'use client';

import { useState } from 'react';
import { TodoItem } from './TodoApp';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: TodoItem[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string, priority: 'low' | 'medium' | 'high', dueDate?: string) => void;
  isEmpty: boolean;
  isFiltered: boolean;
}

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
  isEmpty,
  isFiltered,
}: TodoListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [editPriority, setEditPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [editDueDate, setEditDueDate] = useState('');

  const startEdit = (todo: TodoItem) => {
    setEditingId(todo.id);
    setEditText(todo.text);
    setEditPriority(todo.priority);
    setEditDueDate(todo.dueDate || '');
  };

  const saveEdit = () => {
    if (editText.trim() && editingId) {
      onEdit(editingId, editText.trim(), editPriority, editDueDate || undefined);
      setEditingId(null);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const getPriorityColor = (priority: 'low' | 'medium' | 'high') => {
    switch (priority) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isOverdue = (dueDate?: string) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date() && new Date(dueDate).toDateString() !== new Date().toDateString();
  };

  if (isEmpty) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>📝</div>
        <h3>No tasks yet</h3>
        <p>Create your first task to get started!</p>
      </div>
    );
  }

  if (isFiltered) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>🔍</div>
        <h3>No tasks found</h3>
        <p>Try adjusting your filter</p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`${styles.item} ${todo.completed ? styles.completed : ''} ${
            isOverdue(todo.dueDate) ? styles.overdue : ''
          }`}
        >
          {editingId === todo.id ? (
            <div className={styles.editForm}>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className={styles.editInput}
                autoFocus
              />
              <div className={styles.editPriority}>
                {(['low', 'medium', 'high'] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`${styles.priorityTag} ${
                      editPriority === p ? styles.active : ''
                    }`}
                    style={editPriority === p ? { backgroundColor: getPriorityColor(p) } : {}}
                    onClick={() => setEditPriority(p)}
                  >
                    {p.charAt(0).toUpperCase()}
                  </button>
                ))}
              </div>
              <input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                className={styles.editDateInput}
              />
              <div className={styles.editActions}>
                <button className={styles.saveBtn} onClick={saveEdit}>
                  Save
                </button>
                <button className={styles.cancelBtn} onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className={styles.checkbox}
              />
              <div className={styles.content}>
                <span className={styles.priorityIndicator} style={{ backgroundColor: getPriorityColor(todo.priority) }} />
                <div className={styles.textWrapper}>
                  <p className={styles.text}>{todo.text}</p>
                  {todo.dueDate && (
                    <div className={`${styles.dueDate} ${isOverdue(todo.dueDate) ? styles.overdueBadge : ''}`}>
                      📅 {formatDate(todo.dueDate)}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.actions}>
                <button
                  className={styles.editBtn}
                  onClick={() => startEdit(todo)}
                  title="Edit task"
                >
                  ✏️
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => onDelete(todo.id)}
                  title="Delete task"
                >
                  🗑️
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
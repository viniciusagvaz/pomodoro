import { useTaskContext } from '../../hooks/useTaskContext';
import styles from './styles.module.css';

export function Counter() {
  const { state } = useTaskContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}

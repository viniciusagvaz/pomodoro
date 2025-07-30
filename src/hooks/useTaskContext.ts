import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext/Task.Context';

export function useTaskContext() {
  return useContext(TaskContext);
}

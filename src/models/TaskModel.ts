import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  type: keyof TaskStateModel['config'];
  name: string;
  duration: number;
  startDate: Date;
  completeDate: Date | null;
  interrupteDate: Date | null;
};

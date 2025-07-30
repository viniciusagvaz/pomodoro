import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { useState } from 'react';

export function MainForm() {
  const [task, setTask] = useState('');

  const handleSubmitNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('SUBMIT:', task);
  };

  return (
    <form action='' className='form' onSubmit={handleSubmitNewTask}>
      <div className='formRow'>
        <Input
          type='text'
          label='Task'
          id='task'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <h1>{task}</h1>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <Button icon={<PlayCircleIcon />} onClick={() => {}} />
      </div>
    </form>
  );
}

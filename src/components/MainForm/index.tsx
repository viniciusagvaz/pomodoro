import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function MainForm() {
  return (
    <form action='' className='form'>
      <div className='formRow'>
        <Input type='text' label='Task' id='task' />
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <Button icon={<PlayCircleIcon />} onClick={() => console.log('oi')} />
      </div>
    </form>
  );
}

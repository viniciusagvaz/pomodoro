import { TimerIcon } from 'lucide-react';
import { Header } from './components/Header/Header';

export function App() {
  return (
    <>
      <Header>
        Hello World!
        <button type='button'>
          <TimerIcon />
        </button>
      </Header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        voluptatem fuga possimus mollitia! Impedit nulla tempora non tempore,
        maiores veritatis itaque incidunt facilis a dicta placeat laborum ea
        quaerat. Nostrum.
      </p>
    </>
  );
}

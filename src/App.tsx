import { PlayCircleIcon } from 'lucide-react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Counter } from './components/Counter';
import { Cycles } from './components/Cycles';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <div className={'container-fluid'}>
        <Container>
          <Logo />
        </Container>
        <Container>
          <Menu />
        </Container>
        <Container>
          <Counter />
        </Container>
        <Container>
          <form action='' className='form'>
            <div className='formRow'>
              <Input type='text' label='Task' id='task' />
            </div>

            <div className='formRow'>
              <Cycles />
            </div>

            <div className='formRow'>
              <Button
                icon={<PlayCircleIcon />}
                onClick={() => console.log('oi')}
              />
            </div>
          </form>
        </Container>

        <Footer></Footer>
      </div>
    </>
  );
}

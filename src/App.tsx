import { Container } from './components/Container';
import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

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
            <Input type='text' label='Task' id='task' />
            <Input type='text' id='task' />
          </form>
        </Container>
      </div>
    </>
  );
}

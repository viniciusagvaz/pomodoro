import { Container } from '../../components/Container';
import { Counter } from '../../components/Counter';
import { MainForm } from '../../components/MainForm';
import { Menu } from '../../components/Menu';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Menu />
        </Container>

        <Container>
          <Counter />
        </Container>

        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}

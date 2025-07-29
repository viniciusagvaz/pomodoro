import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <div className={'container-fluid'}>
        <Container>
          <Logo />
        </Container>

        {children}

        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}

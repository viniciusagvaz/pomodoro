import { Container } from '../../components/Container';
import { GenericHTML } from '../../components/GenericHtml';
import { Header } from '../../components/Header';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, at
          et reiciendis eos ipsum earum? Dolorum incidunt, sit veniam repellat
          praesentium doloremque vero facilis pariatur non ut minus vitae
          ratione!
        </p>
        <GenericHTML>
          <Header>404 - Página não encontrada 🚀</Header>
          <p>
            Opa! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha tirado férias, resolvido explorar o universo ou se
            perdido em algum lugar entre dois buracos negros. 🌌
          </p>
          <p>
            Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
            segurança para a <a href='/'>página principal</a> ou{' '}
            <a href='/history'>para o histórico</a> — ou pode ficar por aqui e
            fingir que achou uma página secreta que só os exploradores mais
            legais conseguem acessar. 🧭✨
          </p>
          <p>
            Se você acha que essa página deveria existir (ou se quiser bater um
            papo sobre viagem no tempo e buracos de minhoca), é só entrar em
            contato. Caso contrário, use o menu para voltar ao mundo real.
          </p>
          <p>
            Enquanto isso, fica aqui uma reflexão: "Se uma página não existe na
            internet, será que ela existiu de verdade?" 🤔💭
          </p>
        </GenericHTML>
      </Container>
    </MainTemplate>
  );
}

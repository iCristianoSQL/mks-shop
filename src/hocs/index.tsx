import { Header, Footer } from "../components";
import { Main } from "./styles";

const withLayout =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props) => {
    return (
      <Main>
        <Header />
        <Component {...props} />
        <Footer footerText="MKS sistemas © Todos os direitos reservados" />
      </Main>
    );
  };

export default withLayout;

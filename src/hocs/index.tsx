import { Header, Footer } from "../components";

const withLayout =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props) => {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer footerText="MKS sistemas © Todos os direitos reservados" />
      </>
    );
  };

export default withLayout;

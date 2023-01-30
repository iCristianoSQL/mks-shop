import { Card } from "../../components";
import withLayout from "../../hocs";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <section>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Container>
  );
};

export default withLayout(Home);

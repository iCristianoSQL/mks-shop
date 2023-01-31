import { Card } from "../../components";
import { Container } from "./styles";
import withLayout from "../../hocs";

import { useQuery } from "react-query";
import { getMakertInfos } from "../../services/mksService";

const Home = () => {
  const { data: marketData, isLoading } = useQuery("market-api", async () => {
    try {
      const response = await getMakertInfos();
      return response;
    } catch (error) {
      throw error;
    }
  });

  const handleTratament = () => {
    console.log("oiie");
  };
  return (
    <Container>
      <section>
        {marketData?.products?.map((event) => {
          return (
            <Card
              key={event.id}
              name={event.name}
              description={event.description}
              photo={event.photo}
              price={event.price}
              // handlePurchase={handleTratament}
            />
          );
        })}
      </section>
    </Container>
  );
};

export default withLayout(Home);

import { useQuery } from "react-query";
import { getMakertInfos } from "../../services/mksService";
import { Button } from "../Button";
import { BsBagCheck } from "react-icons/bs";
import * as S from "./styles";
import { truncateText } from "../../utils/formats";

export const Card = () => {
  const {
    data: marketData,
    isLoading,
    isError,
  } = useQuery("market-api", async () => {
    try {
      const response = await getMakertInfos();
      return response;
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <S.Container>
      <div className="image-box">
        <img src={marketData?.products?.[1].photo} alt="" />
      </div>
      <div className="infos">
        <p>{marketData?.products?.[1].name}</p>
        <span>R${marketData?.products?.[0].price}</span>
      </div>
      <span>
        {truncateText(String(marketData?.products?.[1].description), 105)}
      </span>
      <Button>
        <BsBagCheck />
        Comprar
      </Button>
    </S.Container>
  );
};

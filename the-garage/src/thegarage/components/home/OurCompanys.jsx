import { SubTitleStyled, TextStyled } from "./ComponentsStyles";
import { IconContainer } from "../../../ui/components/ComponentsStyles";
import { useCompanys } from "../../../domain/useEmpresas";
import { Alert, Spinner } from "react-bootstrap";

export const OurCompanys = () => {
  const { data, loading, error } = useCompanys();

  return (
    <>
      <SubTitleStyled id="empresas">Empresas</SubTitleStyled>
      <TextStyled>
        Estas son algunas de las empresas que encontrarás en THE GARAGE
      </TextStyled>
      <div className="d-flex flex-wrap justify-content-center  gap-5">
        {loading && <Spinner animation="border" variant="primary" />}
        {error && <Alert variant="danger">{error}</Alert>}
        {data.map((company, index) => {
          return (
            <div
              key={index}
              className="d-flex flex-column align-items-center gap-2"
            >
              <IconContainer
                src={
                  company.url_foto
                    ? company.url_foto
                    : "https://res.cloudinary.com/db9nfgjqr/image/upload/v1697054977/default_image/istockphoto-1316420668-612x612_xcyynq.jpg"
                }
                maxWidth="220px"
                borderRadius="50%"
              />
              <TextStyled>{company.empresa.razon_social}</TextStyled>
            </div>
          );
        })}
      </div>
    </>
  );
};

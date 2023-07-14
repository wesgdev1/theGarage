import { Col, Container, Row } from "react-bootstrap";
import {
  Item,
  Controls,
  Filter,
  Paginator,
  RowItemStyled,
  ContainerNumberItemsStyled,
  ContainerVisualizationStyled,
} from "../components";
import { mockDataTest } from "../dataTest/dataMock";
import { useState } from "react";

export function ItemList() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const addFilter = (filter) => {
    setSelectedFilters([filter, ...selectedFilters]);
  };

  const deleteFilter = (filter) => {
    const aux = [...selectedFilters];
    setSelectedFilters(aux.filter((element) => element != filter));
  };

  const clean = () => {
    setSelectedFilters([]);
  };
  return (
    <Container>
      <Row>
        <Controls filters={selectedFilters} clean={clean} />
      </Row>

      <RowItemStyled className="">
        <Col md={3}>
          <Filter addFilter={addFilter} deleteFilter={deleteFilter} />
        </Col>
        <Col md={9}>
          <ContainerNumberItemsStyled>
            <strong>
              <span> {mockDataTest.length} Productos Encontrados</span>
            </strong>
            <div>
              <span>Visualizacion: </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <i className="bi bi-distribute-vertical"></i>
            </div>
          </ContainerNumberItemsStyled>
          <ContainerVisualizationStyled>
            {mockDataTest.map((element) => (
              <Item key={element.id} item={element} />
            ))}
          </ContainerVisualizationStyled>
          <Paginator />
        </Col>
      </RowItemStyled>
    </Container>
  );
}

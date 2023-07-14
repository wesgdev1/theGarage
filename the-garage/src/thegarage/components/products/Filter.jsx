import { Accordion, Badge, Form, ListGroup } from "react-bootstrap";
import {
  AccordionStyle,
  Badgestyled,
  H4Styled,
} from "./StyledsComponentsProducts";

export function Filter({ addFilter, deleteFilter }) {
  const handlerChange = (event) => {
    const label = event.target.labels[0].innerText;
    if (event.target.checked) {
      addFilter(label);
    } else {
      deleteFilter(label);
    }
  };
  return (
    <>
      <div className="d-flex flex-column  gap-5 vh-100 pt-5">
        <div>
          <H4Styled>FILTRAR POR:</H4Styled>
        </div>
        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categorias</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked0"
                    label="Suspension"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    120
                  </Badgestyled>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked1"
                    label="Mecanica"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    145
                  </Badgestyled>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked2"
                    label="Electricidad"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    150
                  </Badgestyled>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>
        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Marcas</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked3"
                    label="Mercedes"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    120
                  </Badgestyled>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked4"
                    label="Chevrolet"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    145
                  </Badgestyled>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked5"
                    label="Bmw"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    150
                  </Badgestyled>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>
        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Precio</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked6"
                    label="0 - 100.000"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    120
                  </Badgestyled>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked7"
                    label="100.000 - 200.000"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    145
                  </Badgestyled>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked8"
                    label="200.000 300.000"
                    onChange={handlerChange}
                  />
                  <Badgestyled bg="secondary" pill>
                    150
                  </Badgestyled>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>
        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Calificacion</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check type="checkbox" id="flexCheckDefault" checked>
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check type="checkbox" id="flexCheckDefault" checked>
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check type="checkbox" id="flexCheckDefault" checked>
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>
      </div>
    </>
  );
}

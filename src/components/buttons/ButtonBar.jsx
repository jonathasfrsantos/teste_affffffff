import { Button } from "react-bootstrap";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function ButtonBar() {
  return (
    <>
      <div className="button-bar-container">
        <Button variant="success"> Novo </Button>
        <Button variant="primary"> Botão 2</Button>
        <Button variant="primary"> Botão 3</Button>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="pesquisar" />
        </div>
      </div>
    </>
  );
}

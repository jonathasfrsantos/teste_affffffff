import { useState } from "react";
import "./styles.css"; // Importe seu arquivo CSS para estilização
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faTimes,
  faBullseye,
  faArrowUpFromBracket,
  faChartLine,
  faChevronLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

export function SideBar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  const handleMenuItemClick = (event) => {
    // Remove a classe 'selected' de todos os itens de menu
    document.querySelectorAll(".menu-item").forEach((item) => {
      item.classList.remove("selected");
    });

    // Adiciona a classe 'selected' ao item de menu clicado
    event.currentTarget.classList.add("selected");
  };
  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header" onClick={toggleSidebar}>
        {isExpanded ? (
          <FontAwesomeIcon icon={faTimes} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="icon" />
        )}
      </div>
      <ul className="menu">
        <li className="menu-item" onClick={handleMenuItemClick}>
          {" "}
          <FontAwesomeIcon icon={faHouse} className="menu-icon" />
          Dashboard
        </li>

        <li className="menu-item" onClick={toggleSubMenu}>
          {" "}
          <FontAwesomeIcon icon={faChartLine} className="menu-icon" />
          Relatórios{" "}
          <span className="icon-right">
            {isSubMenuVisible ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronLeft} />
            )}
          </span>
        </li>
        <ul className={`submenu ${isSubMenuVisible ? "visible" : ""}`}>
          <li className="submenu-item">Dízimos</li>
          <li className="submenu-item">Saídas</li>
          <li className="submenu-item">Resumo Financeiro</li>
          <li className="submenu-item">Outras Entradas</li>
        </ul>
        <li className="menu-item" onClick={handleMenuItemClick}>
          <FontAwesomeIcon icon={faBullseye} className="menu-icon" />
          Finalidades
        </li>
        <li className="menu-item" onClick={handleMenuItemClick}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="menu-icon" />
          Importação
        </li>
      </ul>
    </div>
  );
}

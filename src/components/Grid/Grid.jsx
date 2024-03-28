import "./styles.css";

import { MainCards } from "../cards/MainCards";
import { DateInput } from "../date-input/DateInput";

import { SideBar } from "../sidebar/SideBar";
import { MainTable } from "../table/MainTable";
import { Header } from "../header/Header";
import { ButtonBar } from "../buttons/ButtonBar";

export function Grid() {
  return (
    <div className="grid">
      <header>
        <Header />
      </header>
      <aside className="sidebar">
        <SideBar />
      </aside>
      <main>
        <div className="main-grid">
          <div className="main-content">
            <MainCards />
            <ButtonBar />
            <MainTable />
          </div>
        </div>
      </main>
      <footer> Footer</footer>
    </div>
  );
}

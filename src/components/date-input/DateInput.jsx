import React, { useState, useRef, useEffect } from 'react';
import './styles.css'; // Importando o arquivo de estilos CSS

export function DateInput() {
  const [showModal, setShowModal] = useState(false);
  const startDateRef = useRef(null); // Referência para o input de data inicial
  const endDateRef = useRef(null); // Referência para o input de data final

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleStartDateKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault(); // Evita o comportamento padrão do tab
      endDateRef.current.focus(); // Dá foco ao input de data final
    }
  };

  useEffect(() => {
    if (showModal) {
      startDateRef.current.focus(); // Dá foco ao input de data inicial quando o modal é aberto
    }
  }, [showModal]);

  return (
    <>
      <button className="button-primary" onClick={handleShow}>
        Período
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Selecione o intervalo</h2>
            <form>
              <div className="form-group">
                <label htmlFor="startDate">Data inicial:</label>
                <input
                  type="date"
                  id="startDate"
                  ref={startDateRef}
                  onKeyDown={handleStartDateKeyDown}
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">Data final:</label>
                <input type="date" id="endDate" ref={endDateRef} />
              </div>
              <div className="button-group">
                <button className="button-secondary" onClick={handleClose}>Fechar</button>
                <button className="button-primary" onClick={handleClose}>Aplicar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

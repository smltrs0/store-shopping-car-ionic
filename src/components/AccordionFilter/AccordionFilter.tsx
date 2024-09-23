import React, { useState } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import './AccordionFilter.css';

interface AccordionFilterProps {
  onFilterChange: (filters: { nameOrder: string; dateOrder: string; priceOrder: string }) => void;
}

const AccordionFilter: React.FC<AccordionFilterProps> = ({ onFilterChange }) => {
  const [selectedNameOrder, setSelectedNameOrder] = useState<string>("");
  const [selectedDateOrder, setSelectedDateOrder] = useState<string>("");
  const [selectedPriceOrder, setSelectedPriceOrder] = useState<string>("");

  const resetFilters = () => {
    setSelectedNameOrder("");
    setSelectedDateOrder("");
    setSelectedPriceOrder("");
    onFilterChange({ nameOrder: "", dateOrder: "", priceOrder: "" });
  };

  const handleFilterChange = () => {
    onFilterChange({
      nameOrder: selectedNameOrder,
      dateOrder: selectedDateOrder,
      priceOrder: selectedPriceOrder,
    });
  };

  return (
    <IonAccordionGroup>
      <IonAccordion value="filters">
        <IonItem slot="header">
          <IonLabel>Filtros</IonLabel>
        </IonItem>
        <div slot="content" className="filter-section">
          <div className="filter-item">
            <IonLabel>Nombre</IonLabel>
            <IonSelect
              value={selectedNameOrder}
              onIonChange={(e) => {
                setSelectedNameOrder(e.detail.value);
                handleFilterChange();
              }}
            >
              <IonSelectOption value="">Seleccione</IonSelectOption>
              <IonSelectOption value="asc">Ascendente</IonSelectOption>
              <IonSelectOption value="desc">Descendente</IonSelectOption>
            </IonSelect>
          </div>
          <div className="filter-item">
            <IonLabel>Fecha</IonLabel>
            <IonSelect
              value={selectedDateOrder}
              onIonChange={(e) => {
                setSelectedDateOrder(e.detail.value);
                handleFilterChange();
              }}
            >
              <IonSelectOption value="">Seleccione</IonSelectOption>
              <IonSelectOption value="asc">Ascendente</IonSelectOption>
              <IonSelectOption value="desc">Descendente</IonSelectOption>
            </IonSelect>
          </div>
          <div className="filter-item">
            <IonLabel>Precio</IonLabel>
            <IonSelect
              value={selectedPriceOrder}
              onIonChange={(e) => {
                setSelectedPriceOrder(e.detail.value);
                handleFilterChange();
              }}
            >
              <IonSelectOption value="">Seleccione</IonSelectOption>
              <IonSelectOption value="asc">Ascendente</IonSelectOption>
              <IonSelectOption value="desc">Descendente</IonSelectOption>
            </IonSelect>
          </div>
        </div>
        <div slot="content" className="reset-button">
          <IonButton onClick={resetFilters}>Restablecer Filtros</IonButton>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
};

export default AccordionFilter;
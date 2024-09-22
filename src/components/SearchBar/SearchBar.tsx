import { IonButton, IonSearchbar } from '@ionic/react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <IonSearchbar animated={true} placeholder="Buscar..." showClearButton="focus" className="search-bar"></IonSearchbar>
      <IonButton expand="block" className="search-button">Buscar</IonButton>
    </div>
  );
}

export default SearchBar;
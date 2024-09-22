import { IonButton, IonSearchbar } from '@ionic/react';
import './SearchBar.css';
import { useState } from 'react';

interface SearchBarProps {
  readonly handlerSearch: (search: string) => void;
}

function SearchBar({ handlerSearch }: SearchBarProps) {

  const [search, setSearch] = useState('');

  const textToSeachHandler = (e: CustomEvent) => {
    const target = e.target as HTMLIonSearchbarElement;
    setSearch(target.value ?? '');
  }

  return (
    <div className="search-bar-container">
      <IonSearchbar onIonInput={textToSeachHandler} animated={true} placeholder="Buscar..." showClearButton="focus" className="search-bar"></IonSearchbar>
      <IonButton onClick={() => handlerSearch(search)} expand="block" className="search-button">Buscar</IonButton>
    </div>
  );
}

export default SearchBar;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonButton, } from "@ionic/react";
import ListItemsContainer from "../../components/ListItemsContainer/ListItemsContainer";
import "./ListItemsPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../application/productsThunks";

const ListItemsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [ page, setPage ] = useState(1);
  useEffect(() => {
    dispatch(fetchProducts({page}));
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.products.loading);

  const products = useSelector((state: RootState) => state.products.products);

  const pageHandler = () => {
    setPage(page + 1);
    dispatch(fetchProducts({page}));
  }
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <SearchBar />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Items</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loading && (
          <IonLoading
            isOpen={loading}
            onDidDismiss={() =>{}}
            message={'Cargando...'}
          />
        )}
        {products && <>
          <ListItemsContainer products={products} />
          <IonButton onClick={() => pageHandler() }>Cargar más</IonButton>
        </>}
      </IonContent>
    </IonPage>
  );
};

export default ListItemsPage;

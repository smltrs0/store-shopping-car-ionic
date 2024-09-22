import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLoading,
} from "@ionic/react";
import ListItemsContainer from "../../components/ListItemsContainer/ListItemsContainer";
import "./ListItemsPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store"; // Ajusta la ruta de importación según la estructura de tu proyecto
import { useEffect } from "react";
import { fetchProducts } from "../../application/productsThunks";

const ListItemsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.products.loading);
  // const loading = true; // Cambia esta línea por la siguiente

  const products = useSelector((state: RootState) => state.products.products);

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
        {products && <ListItemsContainer products={products} />}
      </IonContent>
    </IonPage>
  );
};

export default ListItemsPage;

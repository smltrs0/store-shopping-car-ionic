import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListItemsContainer from '../../components/ListItemsContainer/ListItemsContainer';
import './ListItemsPage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store'; // Adjust the import path according to your project structure
import { useEffect } from 'react';
import { fetchProducts } from '../../application/productsThunks';

const ListItemsPage: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state: RootState) => state.products.products);

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Listado de productos</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
      <SearchBar />

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Items</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListItemsContainer products={products} />
      </IonContent>
    </IonPage>
  );
};

export default ListItemsPage;

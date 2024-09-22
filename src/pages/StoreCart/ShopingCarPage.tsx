import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ShopingCarPage.css';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

const ShopingCarPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Carrito de deseados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <ShoppingCart />
      </IonContent>
    </IonPage>
  );
};

export default ShopingCarPage;

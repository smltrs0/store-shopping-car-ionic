import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText, IonThumbnail, IonButton, IonIcon } from "@ionic/react";
import AccordionFilter from "../AccordionFilter/AccordionFilter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { removeProduct } from "../../domain/shoppingCarSlice";
import Carousel from "../Carousel/Carousel";
import { Product } from "../../ports/productService";
import { trash } from "ionicons/icons";

const ShoppingCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.shoppingCard.products);
  
  const dispatch = useDispatch<AppDispatch>();
  const sortedCartItems = cartItems;

  const deleteHandler = (item: Product) => dispatch(removeProduct(item.id));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {sortedCartItems.length === 0 ? (
          <IonText>
            Tu lista de deseados esta vacio, ve al panel de productos para
            agregar productos
          </IonText>
        ) : (
          <>
            <AccordionFilter />
            <IonList>
              {sortedCartItems.map((item) => (
                <IonItem key={item.id}>
                  <IonThumbnail slot="start">
                    <Carousel images={item.images} showButtons={false} />
                  </IonThumbnail>
                  <IonLabel>
                    <h2>{item.title}</h2>
                    <p>Precio: ${item.price.toFixed(2)}</p>
                  </IonLabel>
                  <IonButton
                    color={"danger"}
                    fill="clear"
                    slot="end"
                    onClick={() => deleteHandler(item)}
                  >
                    <IonIcon icon={ trash} />
                    Eliminar
                  </IonButton>
                </IonItem>
              ))}
            </IonList>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ShoppingCart;

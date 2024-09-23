import React, { useState, useEffect } from "react";
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

  const [filters, setFilters] = useState({ nameOrder: "", dateOrder: "", priceOrder: "" });
  const [sortedCartItems, setSortedCartItems] = useState<Product[]>([]);

  const deleteHandler = (item: Product) => dispatch(removeProduct(item.id));

  const applyFilters = (items: Product[]) => {
    let filteredItems = [...items];

    if (filters.nameOrder) {
      filteredItems.sort((a, b) => 
        filters.nameOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
    }

    if (filters.dateOrder) {
      filteredItems.sort((a, b) => 
        filters.dateOrder === "asc" ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    if (filters.priceOrder) {
      filteredItems.sort((a, b) => 
        filters.priceOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    return filteredItems;
  };

  useEffect(() => {
    setSortedCartItems(applyFilters(cartItems));
  }, [cartItems, filters]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Carrito de Compras</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {sortedCartItems.length === 0 ? (
          <IonText>
            Tu lista de deseados está vacía, ve al panel de productos para agregar productos
          </IonText>
        ) : (
          <>
            <AccordionFilter onFilterChange={setFilters} />
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
                    <IonIcon icon={trash} />
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
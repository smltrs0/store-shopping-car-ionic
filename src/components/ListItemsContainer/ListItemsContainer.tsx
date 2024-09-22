import "./ListItemsContainer.css";
import React from "react";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonToast } from "@ionic/react";
import { heart } from "ionicons/icons";
import Carousel from "../Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { addProduct } from "../../domain/shoppingCarSlice";
import { Product } from "../../ports/productService";

interface ContainerProps {
  products: Product[];
}

const ListItemsContainer: React.FC<ContainerProps> = ({ products }) => {
  const [toastActivated, setToastActivated] = React.useState(false);
  const [showFullDescription, setShowFullDescription] = React.useState<number | null>(null);
  
  
  const dispatch = useDispatch<AppDispatch>();
  const textToast = useSelector((state: RootState) => state.shoppingCard.textToast);
  const statusToast = useSelector((state: RootState) => state.shoppingCard.statusToast);

  const handleToDesired = (product : Product) => {
    setToastActivated(true);
    dispatch(addProduct(product));
  };

  const handleTouchStart = (id: number) => {
    setShowFullDescription(showFullDescription === id ? null : id);
  };

  return (
    <div className="container">
      {products.map((product) => (
        <IonCard key={product.id}>
          <Carousel images={product.images} showButtons={true} />
          <IonCardHeader>
            <IonCardTitle>{product.title}</IonCardTitle>
            <IonCardSubtitle
              className="description"
              onClick={() => handleTouchStart(product.id)}
            >
              {showFullDescription === product.id
                ? product.description
                : `${product.description.substring(0, 50)}...`}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <strong>Precio: {product.price}</strong>
          </IonCardContent>
          <div className="button-container">
            <IonButton onClick={()=>{handleToDesired(product)}} color="white" className="button-add-car">
              <IonIcon icon={heart} /> Deseado
            </IonButton>
          </div>
        </IonCard>
      ))}
      <IonToast
        isOpen={toastActivated}
        color={statusToast}
        onDidDismiss={() => setToastActivated(false)}
        message={textToast}
        duration={1000}
      />
    </div>
  );
};

export default ListItemsContainer;
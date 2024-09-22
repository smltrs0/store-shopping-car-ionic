import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { storefront, heart } from 'ionicons/icons';

import ShopingCarPage from './pages/StoreCart/ShopingCarPage';
import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


import './theme/variables.css';
import ListItemsPage from './pages/ListItems/ListItemsPage';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

setupIonicReact();

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/list-item-page">
            <ListItemsPage />
          </Route>
          <Route exact path="/shoping-card-page">
            <ShopingCarPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/list-item-page" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="list-item-page" href="/list-item-page">
            <IonIcon aria-hidden="true" icon={storefront} />
          </IonTabButton>
          <IonTabButton tab="shoping-card-page" href="/shoping-card-page">
            <IonIcon aria-hidden="true" icon={heart} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
      </IonApp>
      </PersistGate>
    </Provider>
);

export default App;

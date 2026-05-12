import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect, Route, useHistory } from "react-router";
import Home from "./Home";
import About from "./About";
import {
  homeOutline,
  logOutOutline,
  informationCircleOutline,
  logoGoogle,
} from "ionicons/icons";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import { supabase } from "../lib/supabaseClient";

const Menu: React.FC = () => {
  const history = useHistory();
  const path = [
    { name: "Home", url: "/app/home", icon: homeOutline },
    { name: "About", url: "/app/about", icon: informationCircleOutline },
  ];
  const handleLogout = async () => {
    await supabase.auth.signOut();
    history.replace("/");
  };
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {path.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="forward">
                  <IonIcon icon={item.icon} slot="start"></IonIcon>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

             <IonButton expand="full" color="primary" onClick={handleLogout} fill="outline" shape="round">
          <IonIcon icon = {logoGoogle}/>
         Logout
        </IonButton>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app/about" component={About} />
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};
export default Menu;

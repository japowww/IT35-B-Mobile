import {
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
import { Redirect, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import { homeOutline } from "ionicons/icons";

const Menu: React.FC = () => {
  const path = [
    { name: "Home", url: "/app/home", icon: homeOutline },
    { name: "About", path: "/app/about" },
  ];
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
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>

          <Route exact path="/app/home/About" component={About} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};
export default Menu;

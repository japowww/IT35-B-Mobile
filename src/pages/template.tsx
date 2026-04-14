import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Template: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
            <IonTitle>Template</IonTitle>
          </IonButtons>
        </IonToolbar>
        <IonContent>
          <h1>Template</h1>
        </IonContent>
      </IonHeader>
    </IonPage>
  );
};
export default Template;

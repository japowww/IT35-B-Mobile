import "./ExploreContainer.css";
import {
  IonAlert,
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel,
} from "@ionic/react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={["Action"]}
      ></IonAlert>
    </div>
  );
};

export default ExploreContainer;

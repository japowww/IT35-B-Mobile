import './ExploreContainer.css';
import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonItem>
        <IonCheckbox slot="start" />
        <IonLabel>Okay pata?</IonLabel>
      </IonItem>
    </div>
  );
};

export default ExploreContainer;  
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  useIonRouter,
} from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { use } from "react";
import { supabase } from "../lib/supabaseClient";

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
    navigation.push("/app", "forward", "replace");
  };
  const signInWithGoogle =async  () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/app`
      }
    });
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonRouterOutlet>
          <IonButton slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButton>
        </IonRouterOutlet>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="full" color="primary" onClick={signInWithGoogle} fill="outline" shape="round">
          <IonIcon icon = {logoGoogle}/>
         Continue via Google
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};
export default Login;

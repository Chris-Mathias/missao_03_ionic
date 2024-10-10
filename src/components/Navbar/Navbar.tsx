import {
    IonMenu,
    IonContent,
    IonHeader,
    IonButtons,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
} from "@ionic/react";
import {
    personCircleOutline,
    ellipsisVertical,
} from "ionicons/icons";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <IonMenu contentId="main-content">
                <IonContent className="ion-padding">
                    This is the menu content.
                </IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar className="toolbar">
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle className="logoTitle">
                            Google Classroom
                        </IonTitle>
                        <IonButtons slot="primary" className="containerButton">
                            <IonButton shape="round" className="buttonRight menuDots">
                                <IonIcon icon={ellipsisVertical}></IonIcon>
                            </IonButton>
                        </IonButtons>
                        <IonButtons slot="secondary">
                            <IonButton shape="round" className="buttonRight userButton">
                                <IonIcon icon={personCircleOutline}></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding"></IonContent>
            </IonPage>
        </>
    );
}

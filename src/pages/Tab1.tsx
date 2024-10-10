import {
    IonMenu,
    IonContent,
    IonHeader,
    IonButtons,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
} from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
    return (
        <>
            <IonMenu contentId="main-content">
                <IonContent className="ion-padding">
                    This is the menu content.
                </IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <div className="logo">
                        <IonImg className="logoIcon" slot="start" src="/icon-class.svg"/>
                        <IonTitle className="logoTitle">Google Classroom</IonTitle>
                        </div>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                </IonContent>
            </IonPage>
        </>
    );
};

export default Tab1;

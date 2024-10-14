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
    IonPopover,
} from "@ionic/react";
import { personCircleOutline, ellipsisVertical } from "ionicons/icons";

import Menu from "./Menu/Menu";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <IonMenu contentId="main-content">
                <Menu />
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
                            <IonButton
                                shape="round"
                                className="buttonRight menuDots"
                                id="triggerMenu"
                            >
                                <IonIcon icon={ellipsisVertical}></IonIcon>
                            </IonButton>
                            <IonPopover trigger="triggerMenu" triggerAction="click">
                                <IonButtons>
                                    <IonButton className="ion-padding">Configurar a API URL</IonButton>
                                </IonButtons>
                            </IonPopover>
                        </IonButtons>
                        <IonButtons slot="secondary">
                            <IonButton
                                shape="round"
                                className="buttonRight userButton"
                            >
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

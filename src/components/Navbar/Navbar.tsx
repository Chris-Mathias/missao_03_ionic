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
import ApiModal from "./ApiModal/ApiModal";
import ClassModal from "./ClassModal/ClassModal";
import "./Navbar.css";
import Grid from "../Grid/Grid";

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
                        </IonButtons>
                        <IonPopover trigger="triggerMenu" triggerAction="click">
                            <IonButtons slot="start">
                                <IonButton
                                    className="ion-padding"
                                    id="open-modal"
                                    expand="block"
                                >
                                    Configurar a API URL
                                </IonButton>
                            </IonButtons>
                            <IonButtons slot="start">
                                <IonButton
                                    className="ion-padding"
                                    id="open-class-modal"
                                    expand="block"
                                >
                                    Adicionar nova turma
                                </IonButton>
                            </IonButtons>
                            <ApiModal />
                            <ClassModal />
                        </IonPopover>
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
                <IonContent>
                    <Grid />
                </IonContent>
            </IonPage>
        </>
    );
}

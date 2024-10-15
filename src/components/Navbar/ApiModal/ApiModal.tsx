import { useRef } from "react";
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
} from "@ionic/react";

import { useData } from "../../../contexts/dataContext";

export default function ApiModal() {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    const { saveApiUrl } = useData();

    function confirm() {
        const apiUrl = input.current?.value as string;
        if (apiUrl) {
            saveApiUrl(apiUrl);
        }
        modal.current?.dismiss(apiUrl, "confirm");
    }

    return (
        <IonModal ref={modal} trigger="open-modal">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>
                            Cancelar
                        </IonButton>
                    </IonButtons>
                    <IonTitle>API URL</IonTitle>
                    <IonButtons slot="end">
                        <IonButton strong={true} onClick={() => confirm()}>
                            Confirmar
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonInput
                        label="Insira a API URL"
                        labelPlacement="stacked"
                        ref={input}
                        type="text"
                        placeholder="https://api.example.com"
                    />
                </IonItem>
            </IonContent>
        </IonModal>
    );
}
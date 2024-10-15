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
import "./ClassModal.css";

export default function ClassModal() {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    const { handleChange, handleSubmit, formData, setFormEmpty } = useData();

    return (
        <></>
    );
}
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

import { FormEvent } from "react";

import { useData } from "../../../contexts/dataContext";
import "./ClassModal.css";

export default function ClassModal() {
    const modal = useRef<HTMLIonModalElement>(null);
    const { handleChange, handleSubmit, formData } = useData();

    return (
        <>
            <IonModal ref={modal} trigger="open-class-modal">
                <form onSubmit={handleSubmit}>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton
                                    onClick={() => modal.current?.dismiss()}
                                >
                                    Cancelar
                                </IonButton>
                            </IonButtons>
                            <IonTitle>Adicionar nova turma</IonTitle>
                            <IonButtons slot="end">
                                <IonButton
                                    type="submit"
                                    onClick={() => modal.current?.dismiss()}
                                >
                                    Confirmar
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding classForm" style={{ height: "1000px" }}>
                        <label className="classLabel">
                            <input className="classInput"
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Turma"
                            />
                        </label>
                        <label className="classLabel">
                            <input className="classInput"
                                type="text"
                                name="subtitle"
                                value={formData.subtitle}
                                onChange={handleChange}
                                placeholder="Complemento"
                            />
                        </label>
                        <label className="classLabel">
                            <input className="classInput"
                                type="text"
                                name="teacher"
                                value={formData.teacher}
                                onChange={handleChange}
                                placeholder="Professor"
                            />
                        </label>
                        <label className="classLabel">
                            <input className="classInput"
                                type="text"
                                name="pfp"
                                value={formData.pfp}
                                onChange={handleChange}
                                placeholder="Foto de perfil (link)"
                            />
                        </label>
                        <label className="classLabel">
                            <input className="classInput"
                                type="text"
                                name="bg"
                                value={formData.bg}
                                onChange={handleChange}
                                placeholder="Imagem de fundo (link)"
                            />
                        </label>
                    </IonContent>
                </form>
            </IonModal>
        </>
    );
}

import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonButtons,
    IonPopover,
} from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";

import { useData } from "../../../contexts/dataContext";
import "./Card.css";

export default function Card(props: any) {
    const { handleDelete } = useData();

    return (
        <>
            <IonCard
                style={{ backgroundImage: `url(${props.bg})` }}
                className="card"
            >
                <IonCardHeader>
                    <IonCardTitle className="titleCard">
                        {props.title}
                    </IonCardTitle>
                    <IonCardSubtitle className="titleCard">
                        {props.subtitle}
                    </IonCardSubtitle>
                    <div className="buttonCardContainer">
                        <IonButton
                            fill="clear"
                            shape="round"
                            className="buttonCard"
                            id={`triggerDelete${props.id}`}
                        >
                            <IonIcon icon={ellipsisVertical}></IonIcon>
                        </IonButton>
                        <IonPopover
                            trigger={`triggerDelete${props.id}`}
                            triggerAction="click"
                        >
                            <IonButtons slot="start">
                                <IonButton
                                    className="ion-padding"
                                    expand="block"
                                    onClick={() => handleDelete(props.id)}
                                >
                                    Excluir esta turma
                                </IonButton>
                            </IonButtons>
                        </IonPopover>
                    </div>
                </IonCardHeader>
                <IonCardContent>
                    <IonCardSubtitle className="titleCard">
                        {props.teacher.toUpperCase()}
                    </IonCardSubtitle>
                </IonCardContent>
            </IonCard>
        </>
    );
}

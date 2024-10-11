import { IonIcon, IonItem, IonLabel } from '@ionic/react';

export default function Item(props: any) {
    return (
        <IonItem lines={props.lines} className="item">
            <IonIcon className="icon"
                icon={props.icon}
                slot="start"
            ></IonIcon>
            <IonLabel>{props.label}</IonLabel>
        </IonItem>
    );
}
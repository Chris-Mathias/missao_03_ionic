import { IonCol, IonGrid, IonRow } from "@ionic/react";

import Card from "./Card/Card";
import "./Grid.css";
import { useData } from "../../contexts/dataContext";

export default function Grid() {
    const { data } = useData();

    if (!data) {
        return <div>Carregando...</div>;
    }

    return (
        <IonGrid className="grid">
            {data.map((item: any) => (
                <Card key={item.id} {...item} />    
            ))}
        </IonGrid>
    );
}

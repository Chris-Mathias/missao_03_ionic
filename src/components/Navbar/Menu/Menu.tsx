import {
    IonAvatar,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
} from "@ionic/react";
import {
    archiveOutline,
    calendarClearOutline,
    checkboxOutline,
    downloadOutline,
    folderOutline,
    helpCircleOutline,
    homeOutline,
    notificationsOutline,
    settingsOutline,
} from "ionicons/icons";
import "./Menu.css";
import { useData } from "../../../contexts/dataContext";
import Item from "./Item/Item";

export default function Menu() {
    const { data } = useData();

    if (!data) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <IonContent>
                <IonList lines="none">
                    <IonListHeader className="menuTitle" lines="full">
                        <IonLabel>Google Classroom</IonLabel>
                    </IonListHeader>
                    <Item icon={homeOutline} label="Turmas" />
                    <Item icon={calendarClearOutline} label="Agenda" />
                    <Item icon={notificationsOutline} label="Notificações" lines="inset" />
                    <IonListHeader className="menuClasses">
                        CURSOS EM QUE VOCÊ SE INSCREVEU
                    </IonListHeader>
                    <Item icon={checkboxOutline} label="Pendentes" />
                    {data.map((item: any, index: number) => (
                        <IonItem key={item.id} className="item" lines={index === data.length - 1 ? "inset" : "none"}>
                            <IonAvatar slot="start" className="avatar">
                                <img src={item.pfp} />
                            </IonAvatar>
                            <IonLabel>{item.title}</IonLabel>
                        </IonItem>
                    ))}
                    <Item icon={downloadOutline} label="Arquivos off-line" />
                    <Item icon={archiveOutline} label="Turmas arquivadas" />
                    <Item icon={folderOutline} label="Pastas do Google Sala de Aula" />
                    <Item icon={settingsOutline} label="Configurações" />
                    <Item icon={helpCircleOutline} label="Ajuda" />
                </IonList>
            </IonContent>
        </>
    );
}

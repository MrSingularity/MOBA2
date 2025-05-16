import React, { useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonText,
    IonLabel
} from '@ionic/react';

const IonicTestPage = () => {
    const [number, setNumber] = useState('');
    const [fact, setFact] = useState('');

    const fetchFact = async () => {
        if (!number) return;
        try {
            const response = await fetch(`http://numbersapi.com/${number}`);
            const data = await response.text();
            setFact(data);
        } catch (error) {
            setFact('Error fetching number fact.');
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Number Facts</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLabel>Enter a number:</IonLabel>
                <IonInput
                    type="number"
                    value={number}
                    onIonInput={(e) => setNumber(e.target.value)}
                    placeholder="e.g. 42"
                />
                <IonButton expand="block" onClick={fetchFact}>
                    Get Fact
                </IonButton>
                {fact && (
                    <IonText>
                        <p>{fact}</p>
                    </IonText>
                )}
            </IonContent>
        </IonPage>
    );
};

export default IonicTestPage;

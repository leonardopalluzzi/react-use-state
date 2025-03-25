import { useState } from 'react'
import Tab from './Tab'
import TabContent from './TabContent';

export default function Main() {
    const [openFlag, setOpenFlag] = useState(1);
    const tabs = [
        {
            id: 1,
            title: 'HTML',
            content: 'HTML (HyperText Markup Lenguage) e un linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base com etitoli, paragrafi e immagini.'
        },
        {
            id: 2,
            title: 'CSS',
            content: 'CSS (acronimo di Cascading Style Sheets) è un linguaggio usato per definire la formattazione e lo stile visuale di documenti HTML, XHTML o XML. È facile da imparare e capire e fornisce un controllo completo sulla presentazione di pagine web.'
        },
        {
            id: 3,
            title: 'JavaScript',
            content: "JavaScript è un linguaggio di programmazione che gli sviluppatori utilizzano per realizzare pagine Web interattive. Le funzioni di JavaScript possono migliorare l'esperienza utente nel sito Web: dall'aggiornamento dei feed dei social media fino alla visualizzazione di animazioni e mappe interattive."
        },
        {
            id: 4,
            title: 'Node.js',
            content: 'Node.js è un runtime Javascript. In pratica, un ambiente di esecuzione che permette di eseguire codice Javascript come un qualsiasi linguaggio di programmazione.'
        },
        {
            id: 5,
            title: 'Express',
            content: 'js, o semplicemente Express, è un framework di applicazioni Web back-end per la creazione di API RESTful con Node. js, rilasciato come software gratuito e open source sotto la licenza MIT. È progettato per la creazione di applicazioni Web e API.'
        },
        {
            id: 6,
            title: 'ReactJS',
            content: 'React (noto anche come React.js o ReactJS) è una libreria JavaScript front-end gratuita e open source che mira a rendere più "senza soluzione di continuità" la creazione di interfacce utente basate su componenti. È gestito da Meta (ex Facebook) e da una comunità di singoli sviluppatori e aziende.'
        }
    ]

    let checkFlag = false;

    return (
        <>
            <div className="container">
                {tabs.map(item => (
                    <Tab
                        itemId={item.id}
                        key={item.id}
                        openFlag={openFlag === item.id}
                        title={item.title}
                        checkFlag={openFlag ? checkFlag = true : checkFlag = false}
                        content={item.content}
                        setOpenFlag={setOpenFlag}
                        handlerOpenFlag={() => setOpenFlag(openFlag === item.id ? 0 : item.id)} />
                ))}
            </div >

        </>
    )
}
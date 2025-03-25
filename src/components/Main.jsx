import { useState } from 'react'
import Tab from './Tab'
import TabContent from './TabContent';

export default function Main() {
    const [openFlag, setOpenFlag] = useState(1);
    const tabs = [
        {
            id: 1,
            title: 'HTML',
            content: 'lorem',
            error: 'Seleziona un Tab'
        },
        {
            id: 2,
            title: 'CSS',
            content: 'lorem',
            error: 'Seleziona un Tab'
        },
        {
            id: 3,
            title: 'JavaScript',
            content: 'lorem',
            error: 'Seleziona un Tab'
        },
        {
            id: 4,
            title: 'Node.js',
            content: 'lorem',
            error: 'Seleziona un Tab'
        },
        {
            id: 5,
            title: 'Express',
            content: 'lorem',
            error: 'Seleziona un Tab'
        },
        {
            id: 6,
            title: 'ReactJS',
            content: 'lorem',
            error: 'Seleziona un Tab'
        }
    ]

    return (
        <>
            <div className="container">
                <Tab data={tabs} setOpenFlag={setOpenFlag} openFlag={openFlag} />
                <TabContent data={tabs} openFlag={openFlag} />
            </div >
        </>
    )
}
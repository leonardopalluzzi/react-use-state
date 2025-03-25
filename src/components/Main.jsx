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
        },
        {
            id: 2,
            title: 'CSS',
            content: 'lorem',
        },
        {
            id: 3,
            title: 'JavaScript',
            content: 'lorem',
        },
        {
            id: 4,
            title: 'Node.js',
            content: 'lorem',
        },
        {
            id: 5,
            title: 'Express',
            content: 'lorem',
        },
        {
            id: 6,
            title: 'ReactJS',
            content: 'lorem',
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
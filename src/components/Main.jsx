import { useState } from 'react'
import Tab from './Tab'

export default function Main() {
    const [openFlag, setOpenFlag] = useState(0);
    const tabs = [
        {
            id: 1,
            title: 'HTML',
            content: 'lorem'
        },
        {
            id: 2,
            title: 'CSS',
            content: 'lorem'
        },
        {
            id: 3,
            title: 'JavaScript',
            content: 'lorem'
        },
        {
            id: 4,
            title: 'Node.js',
            content: 'lorem'
        },
        {
            id: 5,
            title: 'Express',
            content: 'lorem'
        },
        {
            id: 6,
            title: 'ReactJS',
            content: 'lorem'
        }
    ]

    return (
        <div className="container">

            {tabs.map(item => (
                <Tab
                    key={item.id}
                    title={item.title}
                    openFlag={item.id}
                >
                    <p>{item.content}</p>
                </Tab>
            ))}
            {/* <Tab title={'HTML'} ><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, accusamus?</p></Tab> */}
        </div>

    )
}
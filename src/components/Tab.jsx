import TabContent from './TabContent'

export default function Tab({ title, children, openFlag }) {
    return (
        <div className="tab">
            <button onClick={openFlag} className="btn btn-primary mx-4">{title}</button>
            <div className="tab_content">
                <TabContent title={title} content={children} />
            </div>

        </div>

    )
}
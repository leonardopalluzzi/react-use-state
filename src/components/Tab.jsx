import TabContent from './TabContent'

export default function Tab({ title, children, openFlag, handleOpenFlag }) {

    return (
        <div className="tab">
            <button onClick={handleOpenFlag}
                className="btn btn-primary mx-4">{title}</button>
            <div>
                <TabContent openFlag={openFlag} title={title} content={children} />
            </div>

        </div>

    )
}
export default function TabContent({ data, openFlag }) {

    function renderContent() {
        return data.map(item => (
            <div>
                <h3>{openFlag === item.id ? item.title : ''}</h3>
                <p>{openFlag === item.id ? item.content : ''}</p>
            </div>
        ))
    }

    return (
        <div className="tab_content">
            {(openFlag === 0 ? 'Seleziona un Tab' : renderContent())}
        </div>
    )
}
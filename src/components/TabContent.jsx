export default function TabContent({ data, openFlag }) {

    return (
        <div className="tab_content">
            {data.map(item => (
                <div>
                    <h3>{openFlag === item.id ? item.title : ''}</h3>
                    <p>{openFlag === item.id ? item.content : ''}</p>
                </div>
            ))}
        </div>
    )
}
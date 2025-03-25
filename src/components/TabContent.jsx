export default function TabContent({ title, content, openFlag }) {
    console.log(openFlag);

    return (
        <div className="tab_content">
            <h3>{openFlag && title}</h3>
            {openFlag && content}
        </div>
    )
}
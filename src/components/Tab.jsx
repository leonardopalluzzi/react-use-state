export default function Tab({ title, children, openFlag }) {
    return (
        <div className="tab">
            <button onClick={openFlag} className="btn btn-primary mx-4">{title}</button>
            <div className="tab_content">
                <h3>{title}</h3>
                {children}
            </div>

        </div>

    )
}
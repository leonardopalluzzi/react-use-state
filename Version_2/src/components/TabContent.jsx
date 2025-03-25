export default function TabContent({ title, content, openFlag, checkFlag }) {
    console.log(openFlag);

    function renderContent() {
        if (checkFlag === false) {
            return (
                <>
                    <div className="error_tab_content">
                        <h3>Ciao!</h3>
                        <p>Seleziona un tab</p>
                    </div>

                </>
            )
        } else {
            return (
                <>
                    <h3>{openFlag && title}</h3>
                    <p>{openFlag && content}</p>
                </>
            )

        }
    }


    return (
        <div className={openFlag === true ? 'tab_content' : 'tab_border_none'}>

            {renderContent()}
            {/* <h3>{openFlag && title}</h3>
            <p>{openFlag && content}</p> */}
        </div>
    )
}
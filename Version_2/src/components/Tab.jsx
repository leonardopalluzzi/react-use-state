import TabContent from './TabContent'

export default function Tab({ title, content, openFlag, handlerOpenFlag, checkFlag }) {

    return (
        <>
            <div className="btn_container">
                <button
                    onClick={handlerOpenFlag}
                    className={`btn ${openFlag ? 'btn-warning' : 'btn-primary'} mx-4`}>
                    {title}
                </button>
            </div >
            <div className="tab_container">
                <TabContent title={title} content={content} openFlag={openFlag} checkFlag={checkFlag} />
            </div>
        </>


    )
}
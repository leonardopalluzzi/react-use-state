import TabContent from './TabContent'

export default function Tab({ openFlag, data, setOpenFlag }) {

    return (
        <>
            <div className="btn_container">
                {data.map(item => (
                    <button
                        onClick={() => setOpenFlag(openFlag === item.id ? 0 : item.id)}
                        key={item.id}
                        className={`btn ${openFlag === item.id ? 'btn-warning' : 'btn-primary'} mx-4`}>
                        {item.title}
                    </button>
                ))}
            </div >
        </>


    )
}
import "./VisitList.css";

export default function VisitListOld() {

    let visits = [
        { id: 1, firstName: "אלעזר", lastName: "כהן", imgUrl: "https://img.lovepik.com/element/40021/4674.png_860.png" },
        { id: 4, firstName: "ארז", lastName: "לוי", imgUrl: "https://www.sheba.co.il/webfiles/images/cache/270X346/iarX1/webfiles/fck/image/headers/0bc7177152970166163eff1996258d8f_genari_man.jpg" },
        { id: 8, firstName: "שמעון", lastName: "ישראלי", imgUrl: "https://www.sheba.co.il/webfiles/images/cache/270X346/iarX1/webfiles/fck/image/headers/0bc7177152970166163eff1996258d8f_genari_man.jpg" },
    ]

    return (<div className="visit-list">
        <h1>רשימת ביקורים אצל הרופאים</h1>
        <ul className="ul-visits">
            {visits.map((item, index) => {
                return <li key={item.id}>
                    <div className="one-doctor" >
                        <p>{index + 1}</p>
                        <h3>ד"ר {item.firstName + " " + item.lastName}</h3>
                        <div className="img-doctor">
                            <img src={item.imgUrl} />
                        </div>
                    </div>
                </li>
            })}
        </ul>
    </div>)
}
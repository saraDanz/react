import "./VisitList.css";
import { useState } from "react"
import OneDoctor from "./OneDoctor";

export default function VisitList() {

    let [visits, setVisit] = useState([
        { id: 1, firstName: "אלעזר", lastName: "כהן", imgUrl: "https://img.lovepik.com/element/40021/4674.png_860.png" },
        { id: 4, firstName: "ארז", lastName: "לוי", imgUrl: "https://www.sheba.co.il/webfiles/images/cache/270X346/iarX1/webfiles/fck/image/headers/0bc7177152970166163eff1996258d8f_genari_man.jpg" },
        { id: 8, firstName: "שמעון", lastName: "ישראלי", imgUrl: "https://www.sheba.co.il/webfiles/images/cache/270X346/iarX1/webfiles/fck/image/headers/0bc7177152970166163eff1996258d8f_genari_man.jpg" },
    ])
    const removeVisit = (id) => {
        // let index = visits.findIndex(function (item, index) {
        //     if (item.id == id)
        //         return true;
        //     return false;
        // })

        let index = visits.findIndex(item => item.id == id)
        let copy = [...visits];
        copy.splice(index, 1);
        setVisit(copy);
    }

    return (<div className="visit-list">
        <h1>רשימת ביקורים אצל הרופאים</h1>
        <ul className="ul-visits">
            {visits.map((item, index) => {
                return <li key={item.id}>
                    <OneDoctor myDoctor={item} ind={index} deleteFnnnn={removeVisit} />

                </li>
            })}
        </ul>
    </div>)
}
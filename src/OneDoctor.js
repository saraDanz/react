import "./OneDoctor.css";

export default function OneDoctor(props) {
    const showDoctorsName = () => {

        alert(`שם הרופא הוא :${props.myDoctor.firstName}`)
    }

    return (
        <div className="one-doctor" >
            <p>{props.ind + 1}</p>
            <h3>ד"ר {props.myDoctor.firstName + " " + props.myDoctor.lastName}</h3>
            <div className="img-doctor">
                <img src={props.myDoctor.imgUrl} />
            </div>
            <input type="button" value="הצג את שם הרופא" onClick={showDoctorsName} />
            <input type="button" value="מחק ביקור" onClick={() => { props.deleteFnnnn(props.myDoctor.id) }} />
        </div>)
}
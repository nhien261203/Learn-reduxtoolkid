import { useSelector } from "react-redux";
import "./header.scss";
const Header = (props) => {
    const {setEdit} = props;
    const user = useSelector((state)=>state.user);
    const handleEdit = ()=>{
        setEdit(true);
    }
    return (
        <>
            <header style={{ backgroundColor: '#ff9051', backgroundImage: 'linear-gradient(280deg,#ff9051 2%, #ff9051, 65%, #181818 100% )' }}>
                <div className="info-container">
                    <div className="info-edit" onClick={handleEdit}>
                        Edit
                    </div>
                    <img src={user.avaUrl}
                        alt=""
                        className="info-ava" />
                    <div className="info-username">{user.name}</div>
                    <div className="info-age">{user.age}</div>
                    <div className="info-about">{user.about}</div>
                </div>
            </header>
        </>
    );
}

export default Header;
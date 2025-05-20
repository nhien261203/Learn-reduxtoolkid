import { useSelector } from "react-redux";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const { setEdit } = props;
    const user = useSelector((state) => state.user);
    
    const handleEdit = () => {
        setEdit(true);
        navigate('/edit');
    }

    const handleAbout = () => {
        navigate('/about');
    }

    const navigate = useNavigate();
    const handleProductClick = () => {
        navigate('/product'); // Điều hướng đến trang product
    }
    return (
        <>
            <header style={{
                backgroundColor: `${user.themeColor}`,
                backgroundImage: `linear-gradient(280deg,${user.themeColor} 2%, ${user.themeColor}, 65%, #181818 100% )`
            }}>
                <div className="info-container">
                    <div className="list-button">
                        <div className="info-edit" onClick={handleEdit}>
                            Edit
                        </div>

                        <div className="info-product" onClick={handleProductClick}>
                            Product
                        </div>

                        <div className="button-about" onClick={handleAbout}>
                            About
                        </div>
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
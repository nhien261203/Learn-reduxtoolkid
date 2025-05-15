import "../Edit/edit.scss";
const Input = (props) => {
    const {data, setData, label, inputType, classType} = props;
    return (  
        <>
        <label>{label}</label>
        {inputType ==="textarea"?(
            <textarea 
            type="text" 
            className={classType} 
            placeholder={data} 
            onChange={(e) =>setData(e.target.value)}/>
        ):(
            <input type="text" placeholder={data} onChange={(e) =>setData(e.target.value)}/>
        )}
        {/* condition redering */}

        </>
    );
}
export default Input;
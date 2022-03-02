import './Button.css'

function Button(props) {

    return (
        <button className="button" onClick={() => {
            props.click(props.label)
        }}>
            {props.label}
        </button>
    )
}

export default Button
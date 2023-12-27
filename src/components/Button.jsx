import "./Button.css";

export default function Button({functionPassed, text}) {
    return(
        <button onClick={functionPassed}>{text}</button>
    )
}
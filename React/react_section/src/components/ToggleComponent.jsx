import useToggle from "../hooks/useToggle";

const ToggleComponent = () => {

    const [isOn, toggle] = useToggle();

    return (
        <div>
            <h2>전등상태: {isOn ? "ON" : "OFF"}</h2>
            <button onClick={toggle}>스위치 누르기</button>
        </div>
    );
};

export default ToggleComponent;
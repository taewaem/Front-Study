import useTimer from "../hooks/useTimer"

const TimerComponent = () => {
    const {seconds, start, stop, reset} = useTimer();
    

    return (
        <div>
            <h2>버튼 누르면 타미어 시작!</h2>
            <button onClick={start}>시작</button>
            <button onClick={stop}>정지</button>
            <button onClick={reset}>리셋</button>
        </div>
    );
};

export default TimerComponent;
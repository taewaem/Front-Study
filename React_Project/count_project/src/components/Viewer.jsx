const Viewer = ({ count, input }) => {

    return (
        <div>
            <div>현재 카운트:</div>
            <h1>{count}</h1>
            <div>입력된 값:</div>
            <h2>{input}</h2>
        </div>
    )
}

export default Viewer;
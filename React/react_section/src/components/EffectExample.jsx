import { useEffect } from "react";

const EffectExample = () => {

    useEffect(() => {
        console.log("컴포넌트가 마운트되었습니다!");
    }, []);

    return <h2>useEffect</h2>;

}

export default EffectExample

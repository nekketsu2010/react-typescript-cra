import { useEffect, useState } from "react";

type stateEffectProps = {
    init: number
}

export default function StateEffect({ init }: stateEffectProps) {
    const [count, setCount] = useState(init);
    const [hoge, setHoge] = useState('hoge');

    useEffect(() => {
        console.log(`count is ${count}.`);
    }, [count]);
    const handleClick = () => setCount(count + 1);

    return (
        <>
        {/* ボタンにタイムスタンプ値を反映 */}
        <button onClick={() => setHoge(Date.now().toString())}>Hoge ({hoge})</button>
        <button onClick={handleClick}>カウント</button>
        <p>{count}回、クリックされました。</p>
        </>
    );
}
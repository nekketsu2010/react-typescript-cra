import { useState } from "react";

export default function HookRefNg() {
    let id: null | number = null;
    const [count, setCount] = useState(0);

    const handleStart = () => {
        if (id === null) {
            id = window.setInterval(() => setCount(c => c + 1), 1000);
        }
        console.log(`開始ボタンを押しました。${id}`);
    };

    const handleEnd = () => {
        console.log(`終了ボタンを押しました。${id}`);
        window.clearInterval(id!);
        id = null;
    };

    return (
        <>
            <button onClick={handleStart}>開始</button>
            <button onClick={handleEnd}>終了</button>
            <p>{count}秒経過</p>
        </>
    )
}

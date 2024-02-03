import { useEffect, useState } from "react";
import './HookTimer.css';

type hookTimerProps = {
    init: number
}
export default function HookTimer({ init }: hookTimerProps) {
    const [count, setCount] = useState(init);

    useEffect(() => {
        const t = setInterval(() => {
            setCount(c => c - 1);
        }, 1000);
        return () => {
            clearInterval(t);
        };
    }, []);

    return (
        // カウンターが0未満になった場合、スタイルwarnを適用
        <div className={count < 0 ? 'warn' : ''}>
            現在のカウント：{count}
        </div>
    );
}
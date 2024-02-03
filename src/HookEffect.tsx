import { useEffect, useLayoutEffect, useState } from "react";

const sleep = (delay: number) => {
    const start = Date.now();
    while (true) {
        if (Date.now() - start > 1000) { break; }
    }
};

type hookEffectProps = {
    init: number
};

export default function HookEffect({ init }: hookEffectProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        sleep(2000);
        setCount(init);
    }, []);

    return (
        <p>{count}</p>
    )
}

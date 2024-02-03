import { useReducer } from "react";

type HookReducerInitProps = {
    init : number
};
type StateType = {
    count: number
};
type ActionType = {
    type: "update",
};
function initCounter(init: number) {
    console.log('initCounter is called!')
    return {
        count: Math.floor(Math.random() * (init + 1))
    };
}
export default function HookReducerInit({ init }: HookReducerInitProps) {
    const [state, dispatch] = useReducer(
        (state: StateType, action: ActionType) => {
            switch (action.type) {
                case 'update':
                    return { count: state.count + 1 };
                default:
                    return state;
            }
        },
        init,
        initCounter
    );

    const handleClick = () => {
        dispatch({ type: 'update'});
    };

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{state.count}回、クリックされました。</p>
        </>
    );
}

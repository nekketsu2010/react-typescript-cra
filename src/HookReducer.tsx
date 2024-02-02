import { useReducer } from "react";

type HookReducerProps = {
    init : number
};
type StateType = {
    count: number
};
type ActionType = {
    type: "update",
};
type CountReducerType = (state: StateType, action: ActionType) => StateType;

export default function HookReducer({ init }: HookReducerProps) {
    const [state, dispatch] = useReducer<CountReducerType>(
        (state, action) => {
            switch (action.type) {
                case 'update':
                    return { count: state.count + 1 };
                default:
                    return state;
            }
        },
        {
            count: init
        }
    );

    const handleClick = () => {
        dispatch({ type: 'update' });
    };

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{state.count}回、クリックされました。</p>
        </>
    );
}

import { forwardRef, useImperativeHandle, useRef } from "react"

type myTextBoxProps = {
    label: string,
}

type Handler = {
    focus(): void
}

const MyTextBox = forwardRef<Handler, myTextBoxProps>((props, ref) => {
    const input = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            focus() {
                input.current?.focus();
            }
        };
    }, []);

    return (
    <label>
        {props.label}：
        <input type="text" size={15} ref={input} />
    </label>
    )
});

export default MyTextBox;
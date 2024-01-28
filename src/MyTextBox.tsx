import { forwardRef } from "react"

type myTextBoxProps = {
    label: string,
}

const MyTextBox = forwardRef<HTMLInputElement, myTextBoxProps>(({ label }, ref) => (
    <label>
        {label}：
        <input type="text" size={15} ref={ref} />
    </label>
));

export default MyTextBox;
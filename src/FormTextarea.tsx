import { useState } from "react";

export default function FormTextarea() {
    const [form, setForm] = useState({
        comment: "こんにちは。"
    });

    const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const show = () => {
        console.log(`${form.comment}`);
    }

    return (
        <div>
            <textarea id="comment" name="comment" cols={30} rows={7} value={form.comment} onChange={handleForm} />
            <button type="button" onClick={show}>表示</button>
            <p>{form.comment}</p>
        </div>
    )
}
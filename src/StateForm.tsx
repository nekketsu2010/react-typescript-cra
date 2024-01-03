import { useState } from "react";

export default function StateForm() {
    const [form, setForm] = useState({
        name: '山田太郎',
        age: 18
    });

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.currentTarget.value
        });
    };

    const show = () => {
        console.log(`こんにちは${form.name}(${form.age}歳)さん`);
    };

    return (
        <form>
            <div>
                <label htmlFor="name">名前</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleForm} />
            </div>
            <div>
                <label>年齢</label>
                <input id="age" name="age" type="number" value={form.age} onChange={handleForm} />
            </div>
            <button type="button" onClick={show}>送信</button>
            <p>{form.name}({form.age}歳)さん</p>
        </form>
    );
}
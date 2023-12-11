import { useState } from 'react';

export default function FormSelect() {
    const [form, setForm] = useState({
        animal: 'dog'
    });

    const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () => {
        console.log(`好きな動物：${form.animal}`);
    };

    return (
        <form>
            <label htmlFor='animal'>好きな動物：</label>
            <select id='animal' name='animal' value={form.animal} onChange={handleForm}>
            <option value='dog'>イヌ</option>
            <option value='cat'>ネコ</option>
            <option value='hamster'>ハムスター</option>
            <option value='rabbit'>ウサギ</option>
            </select>
            <p>{form.animal}</p>
            <button type='button' onClick={show}>送信</button>
        </form>
    )
}
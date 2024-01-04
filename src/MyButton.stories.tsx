import { MyButton } from "./MyButton";

export default {
    title: 'MyApp/MyButton',
    component: MyButton
};

export const Index = () => <MyButton primary label="ボタン" />;

export const White = () => <MyButton size="small" label="ボタン" backgroundColor="#fff" />;
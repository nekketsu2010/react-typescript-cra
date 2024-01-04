import { MyButton } from "./MyButton";

export default {
    title: 'MyApp/MyButton',
    component: MyButton,
    args: {
        label: 'ボタン'
    },
    argTypes: {
        size: {
            control: { type: 'select' },
        },
    },
};

export const Index = {
    args: {
        primary: true,
        size: 'medium',
        onClick: () => console.log('Hello, Storybook!!!')
    }
};

export const White = {
    args: {
        size: 'small',
        backgroundColor: '#fff'
    }
};

export const Yellow = {
    args: {
        ...White.args,
        backgroundColor: 'lightyellow'
    }
}
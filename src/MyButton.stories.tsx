import { type Meta, type StoryObj } from '@storybook/react';
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
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
    parameters: {
        layout: 'centered',
    },
} as Meta<typeof MyButton>;

type Story = StoryObj<typeof MyButton>;

export const Index: Story = {
    args: {
        primary: true,
        size: 'medium',
        // イベントハンドラーは無効化（テストが落ちてしまうため）
        // onClick: () => console.log('Hello, Storybook!!!')
    },
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        await userEvent.click(button);
        await userEvent.click(button);
        expect(args.onClick).toHaveBeenCalledTimes(2);
    }
};

export const White: Story = {
    args: {
        size: 'small',
        backgroundColor: '#fff'
    }
};

export const Yellow: Story = {
    args: {
        ...White.args,
        backgroundColor: 'lightyellow'
    }
}
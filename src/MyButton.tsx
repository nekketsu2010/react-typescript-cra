import './stories/button.css'

interface MyButtonProps {
    /**
     * Primaryカラーを有効にするか
     */
    primary?: boolean;
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ボタンの大きさ
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * ボタンのキャプション
     */
    label: string;
    /**
     * 
     * clickハンドラー
     */
    onClick?: () => void;
}

export const MyButton = ({
    primary=false,
    backgroundColor,
    size='medium',
    label='Button',
    ...props
 } : MyButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button type='button' className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} style={{ backgroundColor }} {...props}>
            {label}
        </button>
    );
 };
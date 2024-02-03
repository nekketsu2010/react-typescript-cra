import { createContext } from "react";
import { HookContextChild } from './HookContextChild';

export type HookContextType = {
    title: string,
    lang: string
};
export const MyAppContext = createContext<HookContextType>({title: '', lang: ''});
const config: HookContextType = {
    title: 'React入門',
    lang: 'ja-JP'
};

export default function HookContext() {
    return (
        <MyAppContext.Provider value={config}>
            <div id="c_main">
                <HookContextChild />
            </div>
        </MyAppContext.Provider>
    );
}

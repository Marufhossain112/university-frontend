import React from 'react';
type ActionBarProps = {
    title?: string;
    children?: React.ReactNode | React.ReactElement;
};
export default function ActionBar({ title, children }: ActionBarProps) {
    return (
        <div>
            <h1>{title}</h1>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0px" }}>{children}</div>
        </div>
    );
}

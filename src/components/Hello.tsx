import * as React from "react";

export class Hello extends React.Component<undefined, undefined> {
    render() {
        return <div className="MainCaption">Hello from React.js!</div>;
    }
}

// Note: render() always returns a single JSX element. If we need more, add child elements.

import * as React from "react";

export class Hello extends React.Component<undefined, undefined> {
    render() {
        return <h1>Hello from React.js!</h1>;
    }
}

// Note: render() always returns a single JSX element. If we need more, add child elements.

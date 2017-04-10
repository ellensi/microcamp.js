import * as React from "react";
export interface HelloProps {
    name: string
}

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <div className="MainCaption">Hello from { this.props.name }!</div>;
    }
}

// render() always returns a single JSX element. If we need more, add child elements.

// React.Component<Property, State>

// Props contain variables.
// Optional parameter: name?: string

import * as React from "react";

import { PackageItem } from "./PackageItem";

export interface PackageListProps { packages: any }
export interface PackageListState { selection: number }

export class PackageList extends React.Component<PackageListProps, PackageListState> {

    constructor(props: PackageListProps) {
        super(props); // Must call base class
        this.state = { selection: -1 }; // Assign initial state
        this.setSelection = this.setSelection.bind(this);
    }

    setSelection(index: number) {
        this.setState({ selection: index });
    }

    render() {

        let index = 0;
        let packageElements: JSX.Element[] = this.props.packages.map((pkg: any) => 
            <PackageItem
                selected={ index == this.state.selection }
                index={ index++ }
                data={ pkg }
                setSelection={ this.setSelection }/>
        );

        return (<div>{ packageElements }</div>);
    }
}

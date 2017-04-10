import * as React from "react";

import { PackageItem } from "./PackageItem";

export interface PackageListProps { packages: any }

export class PackageList extends React.Component<PackageListProps, undefined> {
    render() {

        let index = 0;
        let packageElements: JSX.Element[] = this.props.packages.map((pkg: any) => 
            <PackageItem data={ pkg } />
        );

        return (<div>{ packageElements }</div>);
    }
}

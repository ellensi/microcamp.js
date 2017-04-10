import * as React from "react";

export interface PackageItemProps {
    data: any
}

export class PackageItem extends React.Component<PackageItemProps, undefined> {
    render() {
        let pkg = this.props.data;

        return (
            <div className="ItemContainer">
                <div className="ItemLeftPanel">
                    <img className="PackageIcon" src="/resources/icons/package.png" />
                </div>
                <div className="ItemRightPanel">
                    <div className="PackageCaption">{ pkg.name }
                        <span className="PackageVersion">{ pkg.versions[0].version }</span>
                    </div>
                    <div className="PackageAuthor">by { pkg.maintainers[0].username }</div>
                    <div className="PackageDescription">{ pkg.description }</div>
                </div>
            </div>
        );
    }
}

import * as React from "react";

export interface PackageItemProps { data: any }
export interface PackageItemState { expanded: boolean }

export class PackageItem extends React.Component<PackageItemProps, PackageItemState> {
    constructor(props: PackageItemProps) {
        super(props); // Must call base class
        this.state = { expanded: false }; // Assign initial state
        this.toggleExpandState = this.toggleExpandState.bind(this);
    }

    toggleExpandState() {
        let currentState = this.state.expanded;
        this.setState({ expanded: !currentState }); // Toggle boolean value
    }

    render() {
        let pkg = this.props.data;
        let description = pkg.description;
        if (!this.state.expanded && (pkg.description.length > 140)) {
            description = description.substr(0, 140) + "...";
        }
        let expanderText = this.state.expanded ? "[collapse]" : "[expand]";
        let expanderRow = pkg.description.length <= 140 ? "" :
            <div className="ExpanderRow">
                <div className="ExpanderButton" onClick={ this.toggleExpandState }>{ expanderText }</div>
            </div>;

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
                    <div className="PackageDescription">{ description }</div>
                    { expanderRow }
                </div>
            </div>
        );
    }
}

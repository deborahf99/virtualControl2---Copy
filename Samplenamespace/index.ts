import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { HelloWorld } from "./HelloWorld";
import * as React from "react";
// eslint-disable-next-line no-unused-vars
import * as ReactDOM from "react-dom";

export class VirtualControl implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private container: HTMLDivElement;

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        this.container = container;
    }

    // eslint-disable-next-line no-unused-vars
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        let vr = context.parameters.sampleProperty.attributes?.DisplayName
        
        return React.createElement(
            HelloWorld 
        );
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs {
        return { };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}

import * as React from "react";
import "./assets/css/App.css";
import Dropzone from "./DragDropFile";

export interface IHelloWorldProps {
  name?: string;
}


export class HelloWorld extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <Dropzone />
      </div>
    );
  }
}

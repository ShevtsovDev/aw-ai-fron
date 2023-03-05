import {ReactNode} from "react";

export type RoutesType = {
    path: string,
    protected?: boolean,
    Component: () => JSX.Element
}
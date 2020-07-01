import {RouteComponentProps} from "react-app-env";

interface MatchParams {
    movie: number;
}

export interface IPropsMovie extends RouteComponentProps<MatchParams> {}
import {RouteComponentProps} from "react-app-env";

interface MatchParams {
    actor: number;
}

export interface IPropsActorPage extends RouteComponentProps<MatchParams> {}
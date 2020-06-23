import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export function useActions(actions: any) {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}

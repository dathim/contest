import { userActions } from "../store/users/user.slice";
import { makeTestAction } from "../store/users/testAsync.action";
import { modalActions } from "./modal/modal.slice";

export const rootActions = {
  makeTestAction,
  ...userActions,
  ...modalActions
}

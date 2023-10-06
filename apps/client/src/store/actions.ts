import { userActions } from "../store/users/user.slice";
import { makeTestAction } from "../store/users/testAsync.action";
import { modalActions } from "./modal/modal.slice";
import { profileActions } from "./profile/profile.slice";

export const rootActions = {
  makeTestAction,
  ...userActions,
  ...modalActions,
  ...profileActions
}

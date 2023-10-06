import { userActions } from "../store/users/user.slice";
import { makeTestAction } from "../store/users/testAsync.action";
import { modalActions } from "./modal/modal.slice";
import { profileActions, storeProfileAction } from "./profile/profile.slice";

export const rootActions = {
  makeTestAction,
  storeProfileAction,
  ...userActions,
  ...modalActions,
  ...profileActions
}

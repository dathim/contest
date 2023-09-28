import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { actions as userActions } from "../store/users/user.slice";
import { makeTestAction } from "../store/users/testAsync.action";
import { RootState } from "../store/store";

const rootActions = {
  ...userActions,
  makeTestAction
}

export const useActions = () => {

  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch)
  }, [dispatch])
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


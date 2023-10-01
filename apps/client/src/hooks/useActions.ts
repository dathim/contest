import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { rootActions } from "@/store/actions";


export const useActions = () => {

  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch)
  }, [dispatch])
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


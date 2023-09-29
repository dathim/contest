import { useGetConfigQuery } from "@/store/api/config.api";
import { createTheme } from "@mui/material";
import { QueryStatus } from "@reduxjs/toolkit/query";

export const useTheme = () => {
  const { status, data } = useGetConfigQuery(null);
  return (status === QueryStatus.fulfilled) ? createTheme(data?.template.style) : createTheme();
}

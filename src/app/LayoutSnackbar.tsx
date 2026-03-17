"use client";

import { SnackbarProvider } from "notistack";

export default function LayoutSnackbar({ children }: any) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
}

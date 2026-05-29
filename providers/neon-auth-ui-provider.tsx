"use client";

import { NeonAuthUIProvider } from "@neondatabase/auth/react/ui";
import { createAuthClient } from "@neondatabase/auth/next";

const authClient = createAuthClient();

export function NeonAuthUIProviderWrapper({children}: {children: React.ReactNode;}) {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      {children}
    </NeonAuthUIProvider>
  );
}   
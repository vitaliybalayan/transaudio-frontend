"use client";

import { ConfigProvider, App as AntApp, theme } from "antd";
import "antd/dist/reset.css";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          borderRadius: 12,
          colorPrimary: "#6366F1",
          colorLink: "#6366F1",
        },
        components: {
          Card: { borderRadiusLG: 16 },
          Button: { controlHeight: 40, borderRadius: 12 },
          Tag: { borderRadiusSM: 10 },
        },
      }}
    >
      <AntApp>{children}</AntApp>
    </ConfigProvider>
  );
}

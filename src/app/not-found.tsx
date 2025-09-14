"use client";

import { Result, Button, ConfigProvider, App as AntApp } from "antd";
import "antd/dist/reset.css";

export default function NotFound() {
  return (
        <main
          style={{
            minHeight: "50vh",
            display: "grid",
            placeItems: "center",
            padding: 24,
          }}
        >
          <Result
            status="404"
            title="404"
            subTitle="Страница не найдена или была перемещена."
            extra={
              <Button type="primary" size="large" href="/">
                На главную
              </Button>
            }
            style={{
              width: "100%",
              maxWidth: 560,
              background: "#ffffff",
              borderRadius: 16,
              padding: 24,
              boxShadow:
                "0 1px 2px rgba(16, 24, 40, 0.05), 0 8px 24px rgba(16, 24, 40, 0.08)",
            }}
          />
        </main>
  );
}

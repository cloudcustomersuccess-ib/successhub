"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Menu, Typography, Space } from "antd";
import type { MenuProps } from "antd";

const { Header } = Layout;
const { Text } = Typography;

const items: MenuProps["items"] = [
  { key: "/", label: <Link href="/">Home</Link> },
  {
    key: "/streamone-ion",
    label: "StreamOne® ION",
    children: [
      { key: "/streamone-ion/primeros-pasos", label: <Link href="/streamone-ion/primeros-pasos">Primeros pasos</Link> },
      { key: "/streamone-ion/customers", label: <Link href="/streamone-ion/customers">Customers</Link> },
      { key: "/streamone-ion/reports", label: <Link href="/streamone-ion/reports">Reports</Link> },
      { key: "/streamone-ion/billing", label: <Link href="/streamone-ion/billing">Billing</Link> },
      { key: "/streamone-ion/orders", label: <Link href="/streamone-ion/orders">Orders</Link> },
      { key: "/streamone-ion/subscriptions", label: <Link href="/streamone-ion/subscriptions">Subscriptions</Link> },
      { key: "/streamone-ion/marketplace", label: <Link href="/streamone-ion/marketplace">Marketplace</Link> },
      { key: "/streamone-ion/settings", label: <Link href="/streamone-ion/settings">Settings</Link> },
      { key: "/streamone-ion/white-label", label: <Link href="/streamone-ion/white-label">White Label</Link> },
    ],
  },
  { key: "/white-label-storefront", label: <Link href="/white-label-storefront">White Label Storefront</Link> },
  { key: "/fabricante", label: <Link href="/fabricante">Fabricante</Link> },
  { key: "/campanas", label: <Link href="/campanas">Campañas</Link> },
  { key: "/lo-ultimo", label: <Link href="/lo-ultimo">Lo último</Link> },
];

function pickSelectedKey(pathname: string) {
  if (pathname.startsWith("/streamone-ion/")) return pathname;
  if (pathname === "/streamone-ion") return "/streamone-ion";
  return pathname;
}

export default function AppHeader() {
  const pathname = usePathname();
  const selectedKey = pickSelectedKey(pathname);

  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 10, width: "100%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 16 }}>
        <Space size={10}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#003031" }} />
          <Text strong style={{ color: "white" }}>SuccessHub</Text>
        </Space>

        <div style={{ flex: 1, minWidth: 0 }}>
          <Menu
            mode="horizontal"
            theme="dark"
            selectedKeys={[selectedKey]}
            items={items}
            style={{ background: "transparent", borderBottom: "none" }}
          />
        </div>
      </div>
    </Header>
  );
}

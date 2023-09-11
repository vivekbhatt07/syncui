import React from "react";
import "./index.css";
import { TextAvatar } from "../../components";
import { PrimaryLink } from "../../components";

const SidebarItem = ({ children, direction, spacing, alignItems }) => {
  return (
    <div
      className="sidebar_item"
      style={{
        display: "flex",
        flexDirection: direction,
        gap: spacing,
        alignItems: alignItems,
      }}
    >
      {children}
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_wrap">
        <SidebarItem direction="row" spacing="16px" alignItems="center">
          <TextAvatar avatarName="Sync" avatarBg="#047857" dimension="40" />
          <span className="logo_subtitle">UI</span>
        </SidebarItem>
        <SidebarItem direction="column" spacing="8px" alignItems="flex-start">
          <h3 className="item_head">Elements</h3>
          <PrimaryLink reach="/alert">Alert</PrimaryLink>
          <PrimaryLink reach="/avatar">Avatar</PrimaryLink>
          <PrimaryLink reach="/badge">Badge</PrimaryLink>
          <PrimaryLink reach="/button">Button</PrimaryLink>
          <PrimaryLink reach="/card">Card</PrimaryLink>
          <PrimaryLink reach="/heading">Heading</PrimaryLink>
          <PrimaryLink reach="/link">Link</PrimaryLink>
          <PrimaryLink reach="/text">Text</PrimaryLink>
        </SidebarItem>
      </div>
    </aside>
  );
};

export default Sidebar;

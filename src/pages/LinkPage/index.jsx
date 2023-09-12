import React from "react";
import { Link } from "react-router-dom";
import {
  TextAvatar,
  Alert,
  BadgeCard,
  PrimaryButton,
  IconButton,
  LinkButton,
  AvatarBadge,
  ImageAvatar,
  DismissCard,
  ShadowCard,
  TextOverlayCard,
  PrimaryLink,
  CodePreview,
} from "../../components";
import "./index.css";
import {
  PageContainer,
  ComponentContainer,
  ComponentFeature,
  FeatureContainer,
} from "../../layouts";
import { primaryLinkJsx, primaryLinkStyle } from "./linkCode";

const LinkPage = () => {
  return (
    <PageContainer
      pageTitle="Card"
      pageSubtitle="Cards contain content and actions about a single subject."
    >
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          <ComponentContainer
            componentTitle="Links"
            componentSubtitle="The Link component allows you to easily customize anchor elements with your theme colors and typography styles."
            componentJsx={primaryLinkJsx}
            componentStyle={primaryLinkStyle}
          ></ComponentContainer>
          <FeatureContainer title="Props">
            <ComponentFeature
              title="children"
              subTitle="The content of the component."
              featureType="node"
            >
              Feature
            </ComponentFeature>
            <ComponentFeature
              title="children"
              subTitle="The content of the component."
              featureType="node"
            >
              Feature
            </ComponentFeature>
          </FeatureContainer>
        </section>
      </div>
    </PageContainer>
  );
};

export default LinkPage;

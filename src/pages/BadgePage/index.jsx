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
import {
  avatarBadgeJsx,
  avatarBadgeStyle,
  iconBadgeJsx,
  iconBadgeStyle,
} from "./badgeCode";

const BadgePage = () => {
  return (
    <PageContainer
      pageTitle="Badge"
      pageSubtitle="Badge generates a small badge to the top-right of its child(ren)."
    >
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          <ComponentContainer
            componentTitle="Avatar badge"
            componentSubtitle="The Button comes with three variants: text (default), contained, and outlined."
            componentJsx={avatarBadgeJsx}
            componentStyle={avatarBadgeStyle}
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

          <ComponentContainer
            componentTitle="Icon badge"
            componentSubtitle="The Button comes with three variants: text (default), contained, and outlined."
            componentJsx={iconBadgeJsx}
            componentStyle={iconBadgeStyle}
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

export default BadgePage;

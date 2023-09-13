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
  IconBadge,
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
import { ShoppingCart } from "@mui/icons-material";

const BadgePage = () => {
  return (
    <PageContainer
      pageTitle="Badge"
      pageSubtitle="Badge generates a small badge to the top-right of its child(ren)."
    >
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          <div className="flex_horizontal gap_3 items_center">
            <AvatarBadge statusColor="#16a34a">
              <ImageAvatar
                avatarSource="https://picsum.photos/id/237/200/300"
                avatarAlt="puppy"
                dimension="50px"
              />
            </AvatarBadge>
            <AvatarBadge statusColor="#16a34a">
              <ImageAvatar
                avatarSource="https://picsum.photos/id/237/200/300"
                avatarAlt="puppy"
                dimension="100px"
              />
            </AvatarBadge>
          </div>
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
          <div className="flex_horizontal gap_8 items_center">
            <IconBadge badgeColor="#16a34a" badgeText={4} dimension="40px">
              <ShoppingCart />
            </IconBadge>
            <IconBadge badgeColor="#16a34a" badgeText={4} dimension="80px">
              <ShoppingCart />
            </IconBadge>
          </div>
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

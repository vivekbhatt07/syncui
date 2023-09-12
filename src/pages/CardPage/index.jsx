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
import { dismissCardJsx, dismissCardStyle } from "./cardCode";

const CardPage = () => {
  return (
    <PageContainer
      pageTitle="Card"
      pageSubtitle="Cards contain content and actions about a single subject."
    >
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          <ComponentContainer
            componentTitle="Dismiss card"
            componentSubtitle="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
            componentJsx={dismissCardJsx}
            componentStyle={dismissCardStyle}
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

export default CardPage;

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
import { textCodeJsx } from "./textCode";

const TextPage = () => {
  return (
    <PageContainer
      pageTitle="Text"
      pageSubtitle="The Text component is used to display text."
    >
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          <ComponentContainer
            componentTitle="Text"
            componentSubtitle="The Link component allows you to easily customize anchor elements with your theme colors and typography styles."
            componentJsx={textCodeJsx}
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

export default TextPage;

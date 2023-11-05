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
  Heading,
} from "../../components";
import "./index.css";
import {
  PageContainer,
  ComponentContainer,
  ComponentFeature,
  FeatureContainer,
} from "../../layouts";

import { heading_jsx, heading_style } from "./headingCode";

const HeadingPage = () => {
  return (
    <PageContainer
      pageTitle="Heading"
      pageSubtitle="The Heading component is used for rendering headlines. It renders an <h1> element by default."
    >
      <div className="flex_vertical gap_6">
        <Heading variant="h1">Heading 1</Heading>
        <Heading variant="h2">Heading 2</Heading>
        <Heading variant="h3">Heading 3</Heading>
        <Heading variant="h4">Heading 4</Heading>
        <Heading variant="h5">Heading 5</Heading>
        <Heading variant="h6">Heading 6</Heading>
        <section className="flex_vertical gap_3">
          <ComponentContainer
            componentTitle="Heading"
            componentSubtitle="This is a heading"
            componentJsx={heading_jsx}
            componentStyle={heading_style}
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

export default HeadingPage;

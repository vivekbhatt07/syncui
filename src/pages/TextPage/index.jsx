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
  Text,
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
          <Text variant="p">This is a paragraph tag</Text>
          <Text variant="span">This is a span tag</Text>
          <Text variant="strong">This is a strong tag</Text>
          <Text variant="em">This is a em tag</Text>
          <Text variant="code">This is a code tag</Text>
          <Text variant="dfn">This is a dfn tag</Text>
          <Text variant="cite">This is a cite tag</Text>
          <Text variant="abbr">This is a abbr tag</Text>
          <Text variant="blockquote">This is a blockquote tag</Text>
          <Text variant="div">This is a div tag</Text>
          <ComponentContainer
            componentTitle="Text"
            componentSubtitle="This is a text component"
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

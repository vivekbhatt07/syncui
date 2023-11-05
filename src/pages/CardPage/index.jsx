import React from "react";
import { Link } from "react-router-dom";
import {
  BadgeCard,
  DismissCard,
  ShadowCard,
  TextOverlayCard,
  PrimaryLink,
  CodePreview,
  PrimaryCard,
} from "../../components";
import "./index.css";
import {
  PageContainer,
  ComponentContainer,
  ComponentFeature,
  FeatureContainer,
} from "../../layouts";
import {
  dismissCardJsx,
  dismissCardStyle,
  badgeCardJsx,
  badgeCardStyle,
  shadowCardJsx,
  shadowCardStyle,
  textOverlayCardJsx,
  textOverlayCardStyle,
  primaryCardJsx,
  primaryCardStyle,
  textCardJsx,
  textCardStyle,
} from "./cardCode";

import { TextCard } from "../../components/Card";

const CardPage = () => {
  return (
    <PageContainer
      pageTitle="Card"
      pageSubtitle="Cards contain content and actions about a single subject."
    >
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          {/* Dismiss Card */}
          <div className="flex_horizontal gap_8 items_center">
            <DismissCard title="Add Filter">
              This is a filter dialog box
            </DismissCard>
          </div>
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
          {/* Badge Card */}
          <div className="flex_horizontal gap_8 items_center">
            <BadgeCard label="Badge Card">This is a Badge Card</BadgeCard>
          </div>
          <ComponentContainer
            componentTitle="Badge card"
            componentSubtitle="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."
            componentJsx={badgeCardJsx}
            componentStyle={badgeCardStyle}
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
          {/* Shadow Card */}
          <div className="flex_horizontal gap_8 items_center">
            <ShadowCard>This is a Shadow Card</ShadowCard>
          </div>
          <ComponentContainer
            componentTitle="Shadow card"
            componentSubtitle="This is a shadow card"
            componentJsx={shadowCardJsx}
            componentStyle={shadowCardStyle}
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
          {/* Text Overlay Card */}
          <div className="flex_horizontal gap_8 items_center">
            <TextOverlayCard
              thumbnail="https://picsum.photos/seed/picsum/200/300"
              altText="mountain"
            >
              This is a Text Overlay Card
            </TextOverlayCard>
          </div>
          <ComponentContainer
            componentTitle="Text Overlay Card"
            componentSubtitle="This is a Text Overlay Card"
            componentJsx={textOverlayCardJsx}
            componentStyle={textOverlayCardStyle}
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
          {/* Vertical / Horizontal */}
          <div className="flex_horizontal gap_8 items_center">
            <PrimaryCard
              thumbnail="https://picsum.photos/seed/picsum/200/300"
              thumbnailAlt="mountain"
            >
              This is a Column Direction Card
            </PrimaryCard>
            <PrimaryCard
              thumbnail="https://picsum.photos/seed/picsum/200/300"
              thumbnailAlt="mountain"
              direction="row"
            >
              This is a Row Direction Card
            </PrimaryCard>
          </div>
          <ComponentContainer
            componentTitle="Horizontal and Vertical Card"
            componentSubtitle="This is a H and V Card"
            componentJsx={primaryCardJsx}
            componentStyle={primaryCardStyle}
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
          {/* Text Only */}
          <div className="flex_horizontal gap_8 items_center">
            <TextCard>This is a text card</TextCard>
          </div>
          <ComponentContainer
            componentTitle="Text Card Style"
            componentSubtitle="This is a text card style"
            componentJsx={textCardJsx}
            componentStyle={textCardStyle}
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

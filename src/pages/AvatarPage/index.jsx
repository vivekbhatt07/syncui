import React from "react";
import { Link } from "react-router-dom";
import { TextAvatar, ImageAvatar } from "../../components";
import "./index.css";
import {
  PageContainer,
  ComponentContainer,
  ComponentFeature,
  FeatureContainer,
} from "../../layouts";
import {
  imageAvatarJsx,
  imageAvatarStyle,
  textAvatarJsx,
  textAvatarStyle,
} from "./avatarCode";

const AvatarPage = () => {
  return (
    <PageContainer
      pageTitle="Avatar"
      pageSubtitle="Avatars are found throughout material design with uses in everything from tables to dialog menus."
    >
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          <ComponentContainer
            componentTitle="Image avatars"
            componentSubtitle="Image avatars can be created by passing standard img props src or srcSet to the component."
            componentJsx={imageAvatarJsx}
            componentStyle={imageAvatarStyle}
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
            componentTitle="Letter avatars"
            componentSubtitle="Avatars containing simple characters can be created by passing a string as children."
            componentJsx={textAvatarJsx}
            componentStyle={textAvatarStyle}
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

export default AvatarPage;

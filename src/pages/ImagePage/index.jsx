import React from "react";
import { Link } from "react-router-dom";
import { RoundImage, ResponsiveImage } from "../../components";
import "./index.css";
import {
  PageContainer,
  ComponentContainer,
  ComponentFeature,
  FeatureContainer,
} from "../../layouts";

import {
  roundedImageJsx,
  roundedImageStyle,
  responsiveImageJsx,
  responsiveImageStyle,
} from "./imageCode";

const ImagePage = () => {
  return (
    <PageContainer pageTitle="Image" pageSubtitle="This is an Image component.">
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          <RoundImage thumbnail="https://picsum.photos/200/300/?blur" />
          <ComponentContainer
            componentTitle="Rounded Image"
            componentSubtitle="This is a Rounded Image"
            componentJsx={roundedImageJsx}
            componentStyle={roundedImageStyle}
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

          {/*  */}

          <ResponsiveImage
            thumbnail="https://picsum.photos/200/300/?blur"
            thumbnailAlt="person"
            visual={{ maxWidth: "300px", maxHeight: "400px" }}
          />
          <ComponentContainer
            componentTitle="Responsive Image"
            componentSubtitle="This is a responsive Image"
            componentJsx={responsiveImageJsx}
            componentStyle={responsiveImageStyle}
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

export default ImagePage;

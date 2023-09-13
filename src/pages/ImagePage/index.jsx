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

import { roundedImageJsx, roundedImageStyle } from "./imageCode";

const ImagePage = () => {
  return (
    <PageContainer pageTitle="Image" pageSubtitle="This is an Image component.">
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
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
        </section>
      </div>
    </PageContainer>
  );
};

export default ImagePage;

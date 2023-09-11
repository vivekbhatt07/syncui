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
} from "../../layouts";
import { basicButtonJsx, basicButtonStyle } from "./buttonCode.js";

const ButtonPage = () => {
  return (
    <PageContainer
      pageTitle="Button"
      pageSubtitle="Buttons allow users to take actions, and make choices, with a single tap."
    >
      <div className="flex_vertical gap_6">
        <div className="flex_vertical gap_3">
          <p className="text_base">
            Buttons communicate actions that users can take. They are typically
            placed throughout your UI, in places like:
          </p>
          <ul className="flex_vertical gap_1">
            <li>Modal windows</li>
            <li>Forms</li>
            <li>Cards</li>
            <li>Toolbars</li>
          </ul>
        </div>
        <section className="flex_vertical gap_3">
          <ComponentContainer
            componentTitle="Basic button"
            componentSubtitle="The Button comes with three variants: text (default), contained, and outlined."
            componentJsx={basicButtonJsx}
            componentStyle={basicButtonStyle}
          ></ComponentContainer>
          <div className="flex_vertical gap_5 p_4">
            <h2>Props</h2>
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
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default ButtonPage;

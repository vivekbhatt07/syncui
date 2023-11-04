import React from "react";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
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
  FloatingButton,
} from "../../components";
import "./index.css";
import {
  PageContainer,
  ComponentContainer,
  ComponentFeature,
  FeatureContainer,
} from "../../layouts";
import {
  basicButtonJsx,
  basicButtonStyle,
  floatingButtonJsx,
  floatingButtonStyle,
  iconButtonJsx,
  iconButtonStyle,
  linkButtonJsx,
  linkButtonStyle,
} from "./buttonCode.js";

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
          <div className="flex_horizontal gap_8 items_center">
            <PrimaryButton>Button</PrimaryButton>
          </div>
          <ComponentContainer
            componentTitle="Basic button"
            componentSubtitle="The Button comes with three variants: text (default), contained, and outlined."
            componentJsx={basicButtonJsx}
            componentStyle={basicButtonStyle}
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
          <div className="flex_horizontal gap_8 items_center">
            <LinkButton>Link</LinkButton>
          </div>
          <ComponentContainer
            componentTitle="Link button"
            componentSubtitle="The Link component allows you to easily customize anchor elements with your theme colors and typography styles"
            componentJsx={linkButtonJsx}
            componentStyle={linkButtonStyle}
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
          <div className="flex_horizontal gap_8 items_center">
            <LinkButton>Link</LinkButton>
          </div>
          <ComponentContainer
            componentTitle="Link button"
            componentSubtitle="The Link component allows you to easily customize anchor elements with your theme colors and typography styles"
            componentJsx={linkButtonJsx}
            componentStyle={linkButtonStyle}
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
          <div className="flex_horizontal gap_8 items_center">
            <IconButton iconLogo={<Add />} iconText="Add" />
          </div>
          <ComponentContainer
            componentTitle="Icon button"
            componentSubtitle="Icon buttons are commonly found in app bars and toolbars.Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item."
            componentJsx={iconButtonJsx}
            componentStyle={iconButtonStyle}
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

          <div className="flex_horizontal gap_8 items_center relative">
            <FloatingButton>
              <Add />
            </FloatingButton>
          </div>
          <ComponentContainer
            componentTitle="Floating Action Button"
            componentSubtitle="A Floating Action Button (FAB) performs the primary, or most common, action on a screen."
            componentJsx={floatingButtonJsx}
            componentStyle={floatingButtonStyle}
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

export default ButtonPage;

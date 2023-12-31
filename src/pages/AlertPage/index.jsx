import React from "react";
import { Link } from "react-router-dom";
import { EmojiEmotions } from "@mui/icons-material";
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
import { alertJsx, alertStyle } from "./alertCode";

const AlertPage = () => {
  return (
    <PageContainer
      pageTitle="Alert"
      pageSubtitle="An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task."
    >
      <div className="flex_vertical gap_6">
        <section className="flex_vertical gap_3">
          <Alert severity="success" message="Message sent successfully!" />
          <Alert severity="error" message="Error in sending message" />
          <Alert
            severity="warning"
            message="Invalid Login Credentials entered"
          />
          <Alert severity="info" message="This is a info message" />
          <Alert
            severity="custom"
            message="This is a custom alert"
            isIcon
            severityIcon={<EmojiEmotions />}
          />
        </section>
        <section className="flex_vertical gap_3">
          <ComponentContainer
            componentTitle="Basic alert"
            componentSubtitle="The alert offers four severity levels that set a distinctive icon and color."
            componentJsx={alertJsx}
            componentStyle={alertStyle}
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

export default AlertPage;

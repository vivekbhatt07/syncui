import {
  PrimaryButton,
  IconButton,
  LinkButton,
  FloatingButton,
  ImageAvatar,
  TextAvatar,
  AvatarBadge,
  IconBadge,
} from "./components";
import { CameraAlt, Add, ShoppingCart } from "@mui/icons-material";
import Avatar from "./assets/avatar.jpg";

const App = () => {
  return (
    <div style={{ margin: "40px", background: "#fff" }}>
      {/* <PrimaryButton>Apply</PrimaryButton> */}
      {/* <IconButton
        iconTitle="Camera"
        iconLogo={<CameraAlt />}
        iconText="Take Picture"
      /> */}
      {/* <LinkButton reach="">Hello</LinkButton> */}

      {/* <FloatingButton>
        <Add />
      </FloatingButton> */}
      {/* <LinkButton href="">Hello</LinkButton> */}
      {/* <ImageAvatar avatarSource={Avatar} avatarAlt="puppy" dimension="100px" /> */}
      {/* <TextAvatar avatarName="Vivek" avatarBg="#059669" dimension="100" /> */}
      {/* <AvatarBadge statusColor="#16a34a">
        <ImageAvatar
          avatarSource={Avatar}
          avatarAlt="puppy"
          dimension="100px"
        />
      </AvatarBadge> */}
      {/* 
      <AvatarBadge statusColor="#16a34a">
        <ImageAvatar avatarSource={Avatar} avatarAlt="puppy" dimension="50px" />
      </AvatarBadge> */}

      <IconBadge badgeColor="#16a34a" badgeText={4} dimension="40px">
        <ShoppingCart />
      </IconBadge>
    </div>
  );
};

export default App;

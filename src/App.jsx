import {
  PrimaryButton,
  IconButton,
  LinkButton,
  FloatingButton,
  ImageAvatar,
  TextAvatar,
} from "./components";
import { CameraAlt, Add } from "@mui/icons-material";
import Avatar from "./assets/avatar.jpg";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;

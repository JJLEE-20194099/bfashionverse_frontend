import React from "react";
import { Modal } from "native-base";
import { observer } from "mobx-react";
import { useStore } from "../../../utils/context";
import NewsletterComponents from "./NewsletterComponents";
// import CubeNavigation from "../../../components/3DAnimationComponents";
const ModelNewsComponents = observer(() => {
  const {
    modelStore: { isModelNews },
  } = useStore();
  return (
    <Modal isOpen={isModelNews} backgroundColor="black">
      <Modal.Content size={"full"} padding={0}>
  
      </Modal.Content>
    </Modal>
  );
});
export default ModelNewsComponents;

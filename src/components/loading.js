import PuffLoader from "react-spinners/PuffLoader";
import FullPageWrapper from "./ui/fullPageWrapper";

const Loading = (props) => {

  return <FullPageWrapper>
    <PuffLoader color="#735fff" size={100} css='margin: 0 auto;' />
  </FullPageWrapper>
};

export default Loading;
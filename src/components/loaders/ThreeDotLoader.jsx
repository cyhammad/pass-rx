import { ThreeDots } from "react-loader-spinner";

const ThreeDotLoader = () => {
  return (
    <ThreeDots
      visible={true}
      height="20"
      width="50"
      color="#121212"
      radius="5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperclassName=""
    />
  );
};

export default ThreeDotLoader;

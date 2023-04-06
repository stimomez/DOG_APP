import img1 from "../assets/img/loading.gif";
const Loading = () => {
  return (
    <div className=" bg-dark w-screen h-screen fixed top-0 left-0  ">
      <div className="flex justify-center items-center flex-col h-full">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};
export default Loading;

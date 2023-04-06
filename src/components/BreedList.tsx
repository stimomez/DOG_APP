import { PropsBreedList } from "../types/Props";

const BreedList = ({
  breeds,
  openCloseModal,
  closeModal = () => console.log(""),
  timeLoading = () => console.log(""),
  type,
}: PropsBreedList) => {


  return (
    <>
      <div className=" bg-dark w-screen h-screen fixed top-0 left-0  ">
        <div className="flex justify-center items-center flex-col h-full">
          <ul className="flex flex-row gap-4 h-auto bg-slate-200 shadow-xl shadow-slate-400 w-11/12  overflow-auto mx-auto rounded-2xl">
            {breeds.map((breed: string, i: number) => (
              <img
                className=" w-80 h-96 m-6 rounded-full cursor-pointer hover:border border-solid border-cyan-700 max-[380px]:w-52 max-[380px]:h-72"
                key={i}
                src={breed}
                alt=""
              />
            ))}
          </ul>
          <button
            className="mx-auto p-3 bg-cyan-700 uppercase rounded-xl mt-1"
            onClick={() => {
              {
                type === "breed" && openCloseModal();
              }
              {
                timeLoading();
                type === "subBreed" && closeModal();
              }
            }}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};
export default BreedList;

import { useState } from "react";
import { PropsSubBreedList } from "../types/Props";
import BreedList from "./BreedList";
import Loading from "./Loading";
const SubBreedList = ({ subBreedList }: PropsSubBreedList) => {
  const [urlBreeds, setUrlBreeds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openCloseModal = (breeds: string[]) => {
    const urlBreedsTem: string[] = breeds;
    return urlBreedsTem;
  };
  const closeModal = () => {
    setUrlBreeds([]);
  };
  const timeLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          padding: "10px",
        }}
      >
        {subBreedList.map((subBreed, i) => {
          return (
            <li
              onClick={() => {
                const array = openCloseModal(subBreed.url);
                setUrlBreeds(array);
                timeLoading();
              }}
              className="p-3 border cursor-pointer hover:p-2 "
              key={i}
            >
              <h2 className="uppercase">{subBreed.name}</h2>
              <div className="flex flex-col  justify-center gap-1 ">
                <img
                  className="w-40 h-32 mx-auto "
                  src={subBreed.url[0]}
                  alt=""
                />
                <img
                  className="w-40 h-32 mx-auto "
                  src={subBreed.url[1]}
                  alt=""
                />
              </div>
            </li>
          );
        })}
      </ul>
      {urlBreeds.length > 0 && (
        <BreedList
          breeds={urlBreeds}
          openCloseModal={openCloseModal}
          closeModal={closeModal}
          type="subBreed"
          timeLoading={timeLoading}
        />
      )}

      {isLoading && <Loading />}
    </>
  );
};
export default SubBreedList;

import { PropsSmallList } from "../types/Props";

const SmallList = ({ breeds }: PropsSmallList) => {
  return (
    <>
      <ul className="grid grid-cols-2 p-2 pb-0 max-[310px]:grid-cols-1  ">
        {breeds.map((breed: string, i: number) => (
          <img
            key={i}
            className="w-full h-96 max-[310px]:h-56 rounded cursor-pointer"
            src={breed}
            alt=""
          />
        ))}
      </ul>
    </>
  );
};
export default SmallList;

import { PropsSelectBreed } from "../types/Props";
const SelectBreend = ({ onDropDowChange, breedsName }: PropsSelectBreed) => {
  const sendBreed = (breed: string) => {
    if (breed) {
      onDropDowChange(breed);
    }
  };
  return (
    <>
      <select
        className="w-full py-2 mx-auto text-center text-slate-200 outline-none uppercase rounded bg-slate-400"
        name=""
        id=""
        onChange={(e) => sendBreed(e.target.value)}
      >
        <option value="">Select Breed</option>
        {breedsName.map((name, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};
export default SelectBreend;

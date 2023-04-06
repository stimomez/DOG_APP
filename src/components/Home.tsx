import BreedList from "./BreedList";
import { useEffect, useState } from "react";
import {
  ResImgBreeds,
  ResNameBreeds,
  ResSubBreedList,
} from "../interfaces/resAPI";
import { reqResAPI } from "../api/reqRes";
import SelectBreend from "./SelectBreend";
import Loading from "./Loading";
import imgTitle from "../assets/img/adogbone.gif";
import imgTitle2 from "../assets/img/dog-black.gif";
import SmallList from "./SmallBreeds";
import { ListSubBreedImg } from "../interfaces/homeInterfaces";
import SubBreedList from "./SubBreedList";
import NotSubBreed from "./NotSubBreed";
import Footer from "./Footer";

const Home = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [breedsName] = useState<string[]>([]);
  const [breedsModal, setBreedsModal] = useState<boolean>(false);
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const smallBreeds: Array<string> = [];
  const [listSubBreedImg, setListSubBreedImg] = useState<ListSubBreedImg[]>([]);

  useEffect(() => {
    request();
    requestBreedList();
  }, []);

  for (let i = 0; i < 2; i++) {
    smallBreeds.push(breeds[i]);
  }
  const requestBreedList = async () => {
    try {
      const res = await reqResAPI.get<ResNameBreeds>("/breeds/list/all");

      for (const key in res.data.message) {
        breedsName.push(key);
      }
      setTimeout(() => {
        loadindImg(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const request = async (breed: string = "boxer") => {
    try {
      const res = await reqResAPI.get<ResImgBreeds>(`/breed/${breed}/images`);
      setSelectedBreed(breed);
      setBreeds(res.data.message);
      requestSubBreed(breed);
      setTimeout(() => {
        loadindImg(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const openCloseModal = () => {
    loadindImg(true);
    setBreedsModal(!breedsModal);
    requestBreedList();
  };
  const onDropDowChange = (e: string) => {
    loadindImg(true);
    request(e);
  };

  const requestSubBreed = async (breed: string) => {
    const res = await reqResAPI.get<ResSubBreedList>(`/breed/${breed}/list`);
    const subBreeds = res.data.message;
    const arrayTemp: ListSubBreedImg[] = [];

    // url de las imagenes de la sub-raza
    if (subBreeds.length > 0) {
      await Promise.all(
        subBreeds.map(async (subBreed) => {
          const res2 = await reqResAPI.get<ResSubBreedList>(
            `/breed/${breed}/${subBreed}/images`
          );

          arrayTemp.push({
            name: subBreed,
            url: res2.data.message,
          });
        })
      );

      setListSubBreedImg(arrayTemp);
    } else {
      setListSubBreedImg(arrayTemp);
    }
  };

  const loadindImg = (state: boolean) => {
    setIsLoading(state);
  };

  return (
    <>
      <div className="flex justify-around ">
        <img className="-scale-x-100 max-sm:w-20" src={imgTitle2} alt="" />

        <section className="w-1/6 ">
          <h1 className="text-4xl text-title font-extrabold uppercase  max-sm:text-xl   ">
            dogs app
          </h1>
          <img src={imgTitle} alt="" />
        </section>
        <img className=" max-sm:w-20" src={imgTitle2} alt="" />
      </div>
      {breedsModal ? (
        <div>
          <BreedList
            type="breed"
            breeds={breeds}
            openCloseModal={openCloseModal}
          />
        </div>
      ) : (
        <div className="relative">
          <div className="relative">
            <input type="checkbox" id="select" />
            <div
              style={{ minWidth: "140px" }}
              className={`absolute right-6 w-1/6  select `}
            >
              <SelectBreend
                onDropDowChange={onDropDowChange}
                breedsName={breedsName}
              />
            </div>
            <h2 className="font-extrabold uppercase text-2xl text-subtitle m-0">
              {selectedBreed}
            </h2>
            <SmallList breeds={smallBreeds} openCloseModal={openCloseModal} />
            <label
              htmlFor="select"
              style={{ minWidth: "140px" }}
              className="w-1/6   uppercase bg-transparent py-1 mb-1 cursor-pointer border text-white rounded  absolute right-6 bottom-0  hover:bg-white hover:text-gray-600 transition-all"
            >
              breeds
            </label>
          </div>

          <button
            className="btn-transitions p-3 w-1/3 min-w-fit bg-gray-800 rounded mt-3 text-blue-100 uppercase"
            onClick={openCloseModal}
          >
            see more
          </button>
        </div>
      )}

      <h2 className="uppercase my-2">
        list of sub-breeds of the {selectedBreed} breed
      </h2>
      {listSubBreedImg.length > 0 ? (
        <SubBreedList subBreedList={listSubBreedImg} />
      ) : (
        <NotSubBreed />
      )}
      {/* imagen loading */}
      {isLoading && <Loading />}
      {!breedsModal && <Footer />}
    </>
  );
};
export default Home;

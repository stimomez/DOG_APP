import image1 from "../assets/img/dog-not.gif"
const NotSubBreed=()=>{
    return (
      <div className="w-4/5 mx-auto h-full p-2 rounded  text-subtitle  bg-slate-400 mb-10 uppercase">
        not sub-breed
        <img
          className="w-full h-40 object-contain shadow "
          src={image1}
          alt=""
        />
      </div>
    );
}
export default NotSubBreed;
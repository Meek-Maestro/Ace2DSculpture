import "./index.css";
import ErrorImage from "./image.png";
import Header from "../Components/header/header";
const ErrorBoundary = () => {
  return (
    <div
      className=" h-full fixed w-full"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1486754158/vector/abstract-blue-blurred-gradient-mesh-background-design-for-your-presentation-vector-design.jpg?s=612x612&w=0&k=20&c=4Q2KlKRS5T2RbFlznPMu6rx5UMr9B-WMXkimiZDZMY8=')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="p-[50px] text-center grid justify-center">
        <div className=" h-[200px] border-4 border-blue-400 rounded-full relative z-[30]">
          <img
            className=" absolute w-full h-full rounded-full hover:scale-105"
            src={ErrorImage}
            alt=""
          />
        </div>
        <h1 className="h1 text-white mb-3">Something went wrong</h1>
        <h2  className="text-[25px] text-white font-bold mb-2">Check your network connection and try again</h2>
        <h3 className="text-[20px] text-white font-semibold">
          {" "}
          Click <a href="/" className="font-bold underline">here</a> to reload
        </h3>
      </div>
    </div>
  );
};

export default ErrorBoundary;

import React from "react";
import Heading from "../../components/Heading";
//8iHA3fDidT0
const Video = ({ video_path = "8iHA3fDidT0" }) => {
  return (
    <div className="wrapper py-14 ">
      <Heading>Take home An Earth-Friendly Handicraft</Heading>
      <div className='mx-auto aspect-video w-[90%] min-w-[350px]'>

      <iframe
        className="object-fill w-full h-full min-h-[250px] mx-auto"
        src={`https://www.youtube.com/embed/${video_path}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
    </div>
  );
};

export default Video;

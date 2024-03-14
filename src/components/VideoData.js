import { useState } from "react"


const Video = ({ videoUrl }) => {
  return (
      <div className="video-container">
        <iframe
          width="385"
          height="265"
          src={videoUrl}
          title="YouTube video player"
        ></iframe>
      </div>
  );
};

const Menu = ({ handleChange }) => {
  return (
    <div className="container">
      <h1>Video Player</h1>
      <input
        type="radio"
        id="deer"
        name="animals"
        value="deer"
        onChange={handleChange}
      />
      <label htmlFor="deer">Geyik</label>
      <input
        type="radio"
        id="snail"
        name="animals"
        value="snail"
        onChange={handleChange}
      />
      <label htmlFor="snail">Salyangoz</label>
      <input
        type="radio"
        id="cat"
        name="animals"
        value="cat"
        onChange={handleChange}
      />
      <label htmlFor="cat">Kedi</label>
      <input
        type="radio"
        id="spider"
        name="animals"
        value="spider"
        onChange={handleChange}
      />
      <label htmlFor="spider">Örümcek</label>
    </div>
  );
};

const AnimalData = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleChange = (e) => {
    setSelectedAnimal(e.target.value);
  };

  const videoData = {
    deer: "https://www.youtube.com/embed/jqUDipMoMu0",
    snail: "https://www.youtube.com/embed/DvJRFHVkAfM",
    cat: "https://www.youtube.com/embed/VO89weyBK0k",
    spider: "https://www.youtube.com/embed/aVgvPonFPEM",
  };

  return (
    <div>
      <Menu handleChange={handleChange} />
      {selectedAnimal && (
        <Video videoUrl={videoData[selectedAnimal]} />
      )}
    </div>
  );
};

export default AnimalData;
import Image from './images/autumn-headshot.png'

function Hero() {
    return (
      <div className="flex h-96 relative">
          <img className="w-full h-fit opacity-50" src={Image} alt="image"/>
          <div className="block py-5 px-5 50:px-20 absolute top-1/4 50:top-1/2 100:top-full">
            <h1 className="py-5 40:w-8/12 font-bold body-font font-kalnia text-6xl 80:text-8xl text-berry drop-shadow-[1px_1.2px_0px_rgba(255,255,255,0.8)]">
              Hi! I'm Christine.
            </h1>
            <hr className="w-10 h-1 rounded border-0 bg-berry mb-3"></hr>
            <p className="40:w-6/12 100:text-3xl">
              I'm a web developer and multi-passionate creative who's determined to 
              make the web more accessible for all.
            </p>
          </div>
          
      </div>
    );
  }
  
  export default Hero;
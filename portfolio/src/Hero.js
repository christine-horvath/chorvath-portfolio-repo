import Image from './images/autumn-headshot.png'

function Hero() {
    return (
      <div className="flex h-96 relative">
          <img className="w-full h-fit opacity-50" src={Image} alt="image"/>
          <div className="block md:px-20 absolute top-1/2">
            <h1 className="font-bold body-font font-kalnia text-6xl text-berry py-5">
              Hi! I'm Christine.
            </h1>
            <hr className="w-10 h-1 rounded border-0 bg-berry mb-3"></hr>
            <p className="w-6/12">
              I'm a web developer and multi-passionate creative. I'm passionate about 
              making the internet more accessible for all. 
            </p>
          </div>
          
      </div>
    );
  }
  
  export default Hero;
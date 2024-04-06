import { Flex } from "@chakra-ui/react";
import Ani from "./MarketVideo.mp4";
import './Animation.css'

function Animation() {
  return (
    <div className="animation">
      <Flex justify="center" align="center">
      <video width="100%" height="auto" muted loop autoPlay>
        <source src={Ani} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="aniText">
        <p>
        <span>The 15 Minute Trader</span> MASTERCLASS  
        </p> 
        </div>
    </Flex>
    </div>
  );
}

export default Animation;

import React from 'react';
import { Stars, Environment } from '@react-three/drei';
import { useStore } from '../../../state/store';
import * as BUBBLES from '../../../state/bubbles/bubblesConstants';

const prefix = "sky-";

const extension = ".png"

const path = "/";

const fileNames = {
    [BUBBLES.CONTENT_BUBBLE]: "contenido",
    [BUBBLES.DEEP_WEB_BUBBLE]: "deep-web",
    [BUBBLES.SOCIAL_NETWORK_BUBBLE]: "redes",
    [BUBBLES.LOBBY_BUBBLE]: "inicial",
    [BUBBLES.PIRACY_BUBBLE]: "pirateria",
    [BUBBLES.PORN_BUBBLE]: "porno",
    [BUBBLES.INFORMATIVE_BUBBLE]: "informacion"
}

const Universe = (props) => {

    const [currentBubble] = useStore(state => [state.currentBubble]);

    const fileName = fileNames[currentBubble];

    return (
        <>
            <Stars
              radius={100} // Radius of the inner sphere (default=100)
              depth={50} // Depth of area where stars should fit (default=50)
              count={5000} // Amount of stars (default=5000)
              factor={4} // Size factor (default=4)
              saturation={0} // Saturation 0-1 (default=0)
              fade // Faded dots (default=false)
            />
            <Environment
                background={true}
                files={[4, 1, 2, 3, 5, 6].map(n => prefix + fileName + "-" + n + extension)}
                path={path}
            />
        </>
    );
  };

export default Universe;

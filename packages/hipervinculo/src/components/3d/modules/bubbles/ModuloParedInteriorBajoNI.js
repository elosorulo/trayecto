/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React from 'react';
import {
    LOBBY_BUBBLE,
    CONTENT_BUBBLE,
    PIRACY_BUBBLE,
    DEEP_WEB_BUBBLE,
    SOCIAL_NETWORK_BUBBLE,
    PORN_BUBBLE,
    INFORMATIVE_BUBBLE
} from '../../../../state/bubbles/bubblesConstants';

import EspacioInicialParedInteriorBajoNI from './espacioInicial/EspacioInicialParedInteriorBajoNI';
import EspacioDeepWebParedInteriorBajoNI from './espacioDeepWeb/EspacioDeepWebParedInteriorBajoNI';
import EspacioContenidoParedInteriorBajoNI from './espacioContenido/EspacioContenidoParedInteriorBajoNI';
import EspacioInformacionParedInteriorBajoNI from './espacioInformacion/EspacioInformacionParedInteriorBajoNI';
import EspacioRedSocialParedInteriorBajoNI from './espacioRedSocial/EspacioRedSocialParedInteriorBajoNI';
import EspacioPornoParedInteriorBajoNI from './espacioPorno/EspacioPornoParedInteriorBajoNI';
import EspacioPirateriaParedInteriorBajoNI from './espacioPirateria/EspacioPirateriaParedInteriorBajoNI';

function SwitchComponents({ active, children }) {
    return children.filter(child => child.props.bubble === active)
}

const ModuloParedInteriorBajoNI = (props) => {
    return (
        <SwitchComponents active={props.currentBubble}>
            <EspacioInicialParedInteriorBajoNI bubble={LOBBY_BUBBLE} {...props}/>
            <EspacioDeepWebParedInteriorBajoNI bubble={DEEP_WEB_BUBBLE} {...props}/>
            <EspacioContenidoParedInteriorBajoNI bubble={CONTENT_BUBBLE} {...props}/>
            <EspacioRedSocialParedInteriorBajoNI bubble={SOCIAL_NETWORK_BUBBLE} {...props}/>
            <EspacioInformacionParedInteriorBajoNI bubble={INFORMATIVE_BUBBLE} {...props}/>
            <EspacioPornoParedInteriorBajoNI bubble={PORN_BUBBLE} {...props}/>
            <EspacioPirateriaParedInteriorBajoNI bubble={PIRACY_BUBBLE} {...props}/>
        </SwitchComponents>
    );
};

export default ModuloParedInteriorBajoNI;

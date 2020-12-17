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

import EspacioInicialPuertaExteriorNI from './espacioInicial/EspacioInicialPuertaExteriorNI';
import EspacioDeepWebPuertaExteriorNI from './espacioDeepWeb/EspacioDeepWebPuertaExteriorNI';
import EspacioContenidoPuertaExteriorNI from './espacioContenido/EspacioContenidoPuertaExteriorNI';
import EspacioInformacionPuertaExteriorNI from './espacioInformacion/EspacioInformacionPuertaExteriorNI';
import EspacioRedSocialPuertaExteriorNI from './espacioRedSocial/EspacioRedSocialPuertaExteriorNI';
import EspacioPornoPuertaExteriorNI from './espacioPorno/EspacioPornoPuertaExteriorNI';
import EspacioPirateriaPuertaExteriorNI from './espacioPirateria/EspacioPirateriaPuertaExteriorNI';

function SwitchComponents({ active, children }) {
    return children.filter(child => child.props.bubble === active)
}

const ModuloPuertaExteriorNI = (props) => {
    return (
        <SwitchComponents active={props.currentBubble}>
            <EspacioInicialPuertaExteriorNI bubble={LOBBY_BUBBLE} {...props}/>
            <EspacioDeepWebPuertaExteriorNI bubble={DEEP_WEB_BUBBLE} {...props}/>
            <EspacioContenidoPuertaExteriorNI bubble={CONTENT_BUBBLE} {...props}/>
            <EspacioRedSocialPuertaExteriorNI bubble={SOCIAL_NETWORK_BUBBLE} {...props}/>
            <EspacioInformacionPuertaExteriorNI bubble={INFORMATIVE_BUBBLE} {...props}/>
            <EspacioPornoPuertaExteriorNI bubble={PORN_BUBBLE} {...props}/>
            <EspacioPirateriaPuertaExteriorNI bubble={PIRACY_BUBBLE} {...props}/>
        </SwitchComponents>
    );
};

export default ModuloPuertaExteriorNI;
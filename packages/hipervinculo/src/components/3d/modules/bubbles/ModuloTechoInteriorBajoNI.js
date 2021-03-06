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

import EspacioInicialTechoInteriorBajoNI from './espacioInicial/EspacioInicialTechoInteriorBajoNI';
import EspacioDeepWebTechoInteriorBajoNI from './espacioDeepWeb/EspacioDeepWebTechoInteriorBajoNI';
import EspacioContenidoTechoInteriorBajoNI from './espacioContenido/EspacioContenidoTechoInteriorBajoNI';
import EspacioInformacionTechoInteriorBajoNI from './espacioInformacion/EspacioInformacionTechoInteriorBajoNI';
import EspacioRedSocialTechoInteriorBajoNI from './espacioRedSocial/EspacioRedSocialTechoInteriorBajoNI';
import EspacioPornoTechoInteriorBajoNI from './espacioPorno/EspacioPornoTechoInteriorBajoNI';
import EspacioPirateriaTechoInteriorBajoNI from './espacioPirateria/EspacioPirateriaTechoInteriorBajoNI';

function SwitchComponents({ active, children }) {
    return children.filter(child => child.props.bubble === active)
}

const ModuloTechoInteriorBajoNI = (props) => {
    return (
        <SwitchComponents active={props.currentBubble}>
            <EspacioInicialTechoInteriorBajoNI bubble={LOBBY_BUBBLE} {...props}/>
            <EspacioDeepWebTechoInteriorBajoNI bubble={DEEP_WEB_BUBBLE} {...props}/>
            <EspacioContenidoTechoInteriorBajoNI bubble={CONTENT_BUBBLE} {...props}/>
            <EspacioRedSocialTechoInteriorBajoNI bubble={SOCIAL_NETWORK_BUBBLE} {...props}/>
            <EspacioInformacionTechoInteriorBajoNI bubble={INFORMATIVE_BUBBLE} {...props}/>
            <EspacioPornoTechoInteriorBajoNI bubble={PORN_BUBBLE} {...props}/>
            <EspacioPirateriaTechoInteriorBajoNI bubble={PIRACY_BUBBLE} {...props}/>
        </SwitchComponents>
    );
};

export default ModuloTechoInteriorBajoNI;

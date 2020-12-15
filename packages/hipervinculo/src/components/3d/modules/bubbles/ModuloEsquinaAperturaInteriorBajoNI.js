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

import EspacioInicialEsquinaAperturaInteriorNI from './espacioInicial/EspacioInicialEsquinaAperturaInteriorBajoNI';
import EspacioDeepWebEsquinaAperturaInteriorNI from './espacioDeepWeb/EspacioDeepWebEsquinaAperturaInteriorNI';
import EspacioContenidoEsquinaAperturaInteriorNI from './espacioContenido/EspacioContenidoEsquinaAperturaInteriorNI';
import EspacioInformacionEsquinaAperturaInteriorNI from './espacioInformacion/EspacioInformacionEsquinaAperturaInteriorNI';
import EspacioRedSocialEsquinaAperturaInteriorNI from './espacioRedSocial/EspacioRedSocialEsquinaAperturaInteriorNI';
import EspacioPornoEsquinaAperturaInteriorNI from './espacioPorno/EspacioPornoEsquinaAperturaInteriorNI';
import EspacioPirateriaEsquinaAperturaInteriorNI from './espacioPirateria/EspacioPirateriaEsquinaAperturaInteriorNI';

function SwitchComponents({ active, children }) {
    return children.filter(child => child.props.bubble === active)
}

const ModuloEsquinaAperturaInteriorNI = (props) => {
    return (
        <SwitchComponents active={props.currentBubble}>
            <EspacioInicialEsquinaAperturaInteriorNI bubble={LOBBY_BUBBLE} {...props}/>
            <EspacioDeepWebEsquinaAperturaInteriorNI bubble={DEEP_WEB_BUBBLE} {...props}/>
            <EspacioContenidoEsquinaAperturaInteriorNI bubble={CONTENT_BUBBLE} {...props}/>
            <EspacioRedSocialEsquinaAperturaInteriorNI bubble={SOCIAL_NETWORK_BUBBLE} {...props}/>
            <EspacioInformacionEsquinaAperturaInteriorNI bubble={INFORMATIVE_BUBBLE} {...props}/>
            <EspacioPornoEsquinaAperturaInteriorNI bubble={PORN_BUBBLE} {...props}/>
            <EspacioPirateriaEsquinaAperturaInteriorNI bubble={PIRACY_BUBBLE} {...props}/>
        </SwitchComponents>
    );
};

export default ModuloEsquinaAperturaInteriorNI;

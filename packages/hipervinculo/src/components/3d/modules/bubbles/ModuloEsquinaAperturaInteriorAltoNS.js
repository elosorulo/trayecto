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

import EspacioInicialEsquinaAperturaInteriorAltoNS from './espacioInicial/EspacioInicialEsquinaAperturaInteriorAltoNS';
import EspacioDeepWebEsquinaAperturaInteriorAltoNS from './espacioDeepWeb/EspacioDeepWebEsquinaAperturaInteriorAltoNS';
import EspacioContenidoEsquinaAperturaInteriorAltoNS from './espacioContenido/EspacioContenidoEsquinaAperturaInteriorAltoNS';
import EspacioInformacionEsquinaAperturaInteriorAltoNS from './espacioInformacion/EspacioInformacionEsquinaAperturaInteriorAltoNS';
import EspacioRedSocialEsquinaAperturaInteriorAltoNS from './espacioRedSocial/EspacioRedSocialEsquinaAperturaInteriorAltoNS';
import EspacioPornoEsquinaAperturaInteriorAltoNS from './espacioPorno/EspacioPornoEsquinaAperturaInteriorAltoNS';
import EspacioPirateriaEsquinaAperturaInteriorAltoNS from './espacioPirateria/EspacioPirateriaEsquinaAperturaInteriorAltoNS';

function SwitchComponents({ active, children }) {
    return children.filter(child => child.props.bubble === active)
}

const ModuloEsquinaAperturaInteriorAltoNS = (props) => {
    return (
        <SwitchComponents active={props.currentBubble}>
            <EspacioInicialEsquinaAperturaInteriorAltoNS bubble={LOBBY_BUBBLE} {...props}/>
            <EspacioDeepWebEsquinaAperturaInteriorAltoNS bubble={DEEP_WEB_BUBBLE} {...props}/>
            <EspacioContenidoEsquinaAperturaInteriorAltoNS bubble={CONTENT_BUBBLE} {...props}/>
            <EspacioRedSocialEsquinaAperturaInteriorAltoNS bubble={SOCIAL_NETWORK_BUBBLE} {...props}/>
            <EspacioInformacionEsquinaAperturaInteriorAltoNS bubble={INFORMATIVE_BUBBLE} {...props}/>
            <EspacioPornoEsquinaAperturaInteriorAltoNS bubble={PORN_BUBBLE} {...props}/>
            <EspacioPirateriaEsquinaAperturaInteriorAltoNS bubble={PIRACY_BUBBLE} {...props}/>
        </SwitchComponents>
    );
};

export default ModuloEsquinaAperturaInteriorAltoNS;
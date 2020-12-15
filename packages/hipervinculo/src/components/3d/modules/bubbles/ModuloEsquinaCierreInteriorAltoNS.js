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

import EspacioInicialEsquinaCierreInteriorAltoNS from './espacioInicial/EspacioInicialEsquinaCierreInteriorAltoNS';
import EspacioDeepWebEsquinaCierreInteriorAltoNS from './espacioDeepWeb/EspacioDeepWebEsquinaCierreInteriorAltoNS';
import EspacioContenidoEsquinaCierreInteriorAltoNS from './espacioContenido/EspacioContenidoEsquinaCierreInteriorAltoNS';
import EspacioInformacionEsquinaCierreInteriorAltoNS from './espacioInformacion/EspacioInformacionEsquinaCierreInteriorAltoNS';
import EspacioRedSocialEsquinaCierreInteriorAltoNS from './espacioRedSocial/EspacioRedSocialEsquinaCierreInteriorAltoNS';
import EspacioPornoEsquinaCierreInteriorAltoNS from './espacioPorno/EspacioPornoEsquinaCierreInteriorAltoNS';
import EspacioPirateriaEsquinaCierreInteriorAltoNS from './espacioPirateria/EspacioPirateriaEsquinaCierreInteriorAltoNS';

function SwitchComponents({ active, children }) {
    return children.filter(child => child.props.bubble === active)
}

const ModuloEsquinaCierreInteriorAltoNS = (props) => {
    return (
        <SwitchComponents active={props.currentBubble}>
            <EspacioInicialEsquinaCierreInteriorAltoNS bubble={LOBBY_BUBBLE} {...props}/>
            <EspacioDeepWebEsquinaCierreInteriorAltoNS bubble={DEEP_WEB_BUBBLE} {...props}/>
            <EspacioContenidoEsquinaCierreInteriorAltoNS bubble={CONTENT_BUBBLE} {...props}/>
            <EspacioRedSocialEsquinaCierreInteriorAltoNS bubble={SOCIAL_NETWORK_BUBBLE} {...props}/>
            <EspacioInformacionEsquinaCierreInteriorAltoNS bubble={INFORMATIVE_BUBBLE} {...props}/>
            <EspacioPornoEsquinaCierreInteriorAltoNS bubble={PORN_BUBBLE} {...props}/>
            <EspacioPirateriaEsquinaCierreInteriorAltoNS bubble={PIRACY_BUBBLE} {...props}/>
        </SwitchComponents>
    );
};

export default ModuloEsquinaCierreInteriorAltoNS;

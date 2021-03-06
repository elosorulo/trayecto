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

import EspacioInicialEsquinaCierreExteriorNI from './espacioInicial/EspacioInicialEsquinaCierreExteriorNI';
import EspacioDeepWebEsquinaCierreExteriorNI from './espacioDeepWeb/EspacioDeepWebEsquinaCierreExteriorNI';
import EspacioContenidoEsquinaCierreExteriorNI from './espacioContenido/EspacioContenidoEsquinaCierreExteriorNI';
import EspacioInformacionEsquinaCierreExteriorNI from './espacioInformacion/EspacioInformacionEsquinaCierreExteriorNI';
import EspacioRedSocialEsquinaCierreExteriorNI from './espacioRedSocial/EspacioRedSocialEsquinaCierreExteriorNI';
import EspacioPornoEsquinaCierreExteriorNI from './espacioPorno/EspacioPornoEsquinaCierreExteriorNI';
import EspacioPirateriaEsquinaCierreExteriorNI from './espacioPirateria/EspacioPirateriaEsquinaCierreExteriorNI';

function SwitchComponents({ active, children }) {
    return children.filter(child => child.props.bubble === active)
}

const ModuloEsquinaCierreExteriorNI = (props) => {
    return (
        <SwitchComponents active={props.currentBubble}>
            <EspacioInicialEsquinaCierreExteriorNI bubble={LOBBY_BUBBLE} {...props}/>
            <EspacioDeepWebEsquinaCierreExteriorNI bubble={DEEP_WEB_BUBBLE} {...props}/>
            <EspacioContenidoEsquinaCierreExteriorNI bubble={CONTENT_BUBBLE} {...props}/>
            <EspacioRedSocialEsquinaCierreExteriorNI bubble={SOCIAL_NETWORK_BUBBLE} {...props}/>
            <EspacioInformacionEsquinaCierreExteriorNI bubble={INFORMATIVE_BUBBLE} {...props}/>
            <EspacioPornoEsquinaCierreExteriorNI bubble={PORN_BUBBLE} {...props}/>
            <EspacioPirateriaEsquinaCierreExteriorNI bubble={PIRACY_BUBBLE} {...props}/>
        </SwitchComponents>
    );
};

export default ModuloEsquinaCierreExteriorNI;

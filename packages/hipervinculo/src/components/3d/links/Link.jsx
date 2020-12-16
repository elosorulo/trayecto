import React from 'react';
import { DEEP_WEB_BUBBLE, INFORMATIVE_BUBBLE, PIRACY_BUBBLE, PORN_BUBBLE, CONTENT_BUBBLE, LOBBY_BUBBLE, SOCIAL_NETWORK_BUBBLE } from '../../../state/bubbles/bubblesConstants';
import LinkContenido from './LinkContenido';
import LinkDeepWeb from './LinkDeepWeb';
import LinkInformacion from './LinkInformacion';
import LinkInicio from './LinkInicio';
import LinkPirateria from './LinkPirateria';
import LinkPorno from './LinkPorno';
import LinkRedesSociales from './LinkRedesSociales';

const LinkMap = (props) => {
    return {
        [DEEP_WEB_BUBBLE]: [
            () => <LinkContenido {...props}/>,
            () => <LinkPirateria {...props}/>,
            () => <LinkPorno {...props}/>,
            () => <LinkInicio {...props}/>
        ],
        [PIRACY_BUBBLE]: [
            () => <LinkContenido {...props}/>,
            () => <LinkDeepWeb {...props}/>,
            () => <LinkPorno {...props}/>,
            () => <LinkRedesSociales {...props}/>,
        ],
        [SOCIAL_NETWORK_BUBBLE]: [
            () => <LinkPirateria {...props}/>,
            () => <LinkContenido {...props}/>,
            () => <LinkInformacion {...props}/>,
            () => <LinkPorno {...props}/>,
            () => <LinkInicio {...props}/>
        ],
        [LOBBY_BUBBLE]: [
            () => <LinkRedesSociales {...props}/>,
            () => <LinkInformacion {...props}/>,
            () => <LinkContenido {...props}/>
        ],
        [CONTENT_BUBBLE]: [
            () => <LinkPorno {...props}/>,
            () => <LinkInformacion {...props}/>,
            () => <LinkRedesSociales {...props}/>,
            () => <LinkInicio {...props}/>
        ],
        [INFORMATIVE_BUBBLE]: [
            () => <LinkPirateria {...props}/>,
            () => <LinkPorno {...props}/>,
            () => <LinkInformacion {...props}/>,
            () => <LinkRedesSociales {...props}/>,
            () => <LinkInicio {...props}/>
        ],
        [PORN_BUBBLE]: [
            () => <LinkPirateria {...props}/>,
            () => <LinkDeepWeb {...props}/>,
            () => <LinkRedesSociales {...props}/>
        ]
    }
}

const Link = (props) => {
    
    const links = LinkMap(props)[props.currentBubble]
    return (
        (Math.random() * 100) < 12 ?  links[Math.floor(Math.random() * links.length)]() : () => <></>
    );
};

export default Link;

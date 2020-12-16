import { omit, set } from 'lodash';
import create from 'zustand';
import { CONTENT_BUBBLE, DEEP_WEB_BUBBLE, INFORMATIVE_BUBBLE, LOBBY_BUBBLE, PIRACY_BUBBLE, PORN_BUBBLE, SOCIAL_NETWORK_BUBBLE } from './bubbles/bubblesConstants';
import storeReducer from './reducers/storeReducer';

const RINGS_AMOUNT = 1;
const DODECAHEDRONS_AMOUNT = 0;
const SPHERES_AMOUNT = 0;
const LATHES_AMOUNT = 0;
const TETRAHEDRONS_AMOUNT = 0;
const EMPTY = "EMPTY";

const animation = (amount) => {
  return {
    amount: amount,
    lastFree: 0,
    shapes: [...Array(amount)].map(() => EMPTY),
  }
};

const initialState = {
  camera: {
    position: [0, 0, 0]
  },
  ambientLight: {
    intensity: 0.5
  },
  spotLights: [],
  shapes: [],
  planes: [],
  outline: {},
  dodecahedronsAnimations: animation(DODECAHEDRONS_AMOUNT),
  tetrahedronsAnimations: animation(TETRAHEDRONS_AMOUNT),
  lathesAnimations: animation(LATHES_AMOUNT),
  spheresAnimations: animation(SPHERES_AMOUNT),
  ringsAnimations: animation(RINGS_AMOUNT),
  waves: [],
  currentBubble: LOBBY_BUBBLE,
  characterPosition: [0, 30, 0],
  links: {}
};

export const [useCharacterStoreApi, characterStoreApi] = create(set => ({
  characterPosition: [0, 30, 0],
  setCharacterPosition: (position) => set(state => {
      return {
        ...state,
        characterPosition: position
      }
    })
}))

export const [useStore, storeApi] = create(set => ({
    ...initialState,
    dispatch: action => set(state => storeReducer(state, action)),
    setWaves: waves => set(state => {
      return {
        ...state,
        waves
      }
    }),
    setCurrentBubble: (bubble) => set(state => {
      return {
        ...state,
        currentBubble: bubble
      }
    }),
    addLink: (id, position) => set(state => {
      return {
        ...state,
        links: {
          ...state.links,
          [id]: {
            position: position
          }
        }
      }
    }),
    removeLink: (id) => set(state => {
      return {
        ...state,
        links: omit(state.links, id)    
      }
    })
}));

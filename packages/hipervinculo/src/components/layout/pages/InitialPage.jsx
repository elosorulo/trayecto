import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import {fontColor} from '../../../style/color';
import Title from '../../text/Title';
import SubTitle from '../../text/SubTitle';
import Credits from '../../text/Credits';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StyledButton from '../../buttons/StyledButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import isVertical from '../../../utils/isVertical';
import { isMobile, isTablet } from 'react-device-detect';

const mobileHorizontal = !isVertical && isMobile && !isTablet;

const Description = () => {
    return (
        <Grid item xs={12}>
            <Title mobileHorizontal={mobileHorizontal}>Experimento</Title>
            <SubTitle mobileHorizontal={mobileHorizontal}>Espacio Procedural</SubTitle>
            <Credits mobileHorizontal={mobileHorizontal}>Manuel Strajman</Credits>
            <Credits mobileHorizontal={mobileHorizontal}>Esteban Sagman</Credits>
            <Credits mobileHorizontal={mobileHorizontal}>Leonel Sagman</Credits>
            <Credits mobileHorizontal={mobileHorizontal}>Agustin Cotroneo</Credits>
        </Grid>
    );
};

const PlayButton = (props) => {
    return (
        <StyledButton onClick={props.play}>
            {props.started ?
                <KeyboardArrowDownIcon
                    fontSize="large"
                    style={{color: fontColor}}
                />
                    :
                <PlayArrowIcon
                    fontSize="large"
                    style={{color: fontColor}}
                />
            }
        </StyledButton>
    );
};

const InitialPage = (props) => {
    return (
        <Grid container justify={"center"} align={"center"} spacing={mobileHorizontal ? 3 : 10}>
            <Description/>
            <Grid item xs={10}>
                <PlayButton play={props.start} started={props.started}/>
            </Grid>
        </Grid>
    );
};

export default InitialPage;

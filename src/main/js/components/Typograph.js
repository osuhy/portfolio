import styled from 'styled-components'

const Typograph = ({props}) => 
<div>
    <Left time={((props - 4000 ) / 10)} src='/img/typograph/side.png' />
    <Right time={((props - 4000 ) / 10)} src='/img/typograph/side.png' />
    <Center time={((props - 4000 ) / 10)} src='/img/typograph/center.png' />
    <Shadow time={((props - 4000 ) / 10)} src='/img/typograph/shadow.png' />
</div>
export default  Typograph

const Left = styled.img`
    position: fixed;
    width: 300px;

    left: calc( -100% + ${props => props.time}%);
    top: 40%;

    @media all and (max-width:600px) {
        left: 15%;
        width: 70%;
        left: calc(-120% + ${props => props.time}%);
    }

    ${props => (props.time < 10) && `
        display: none;
    `}
    ${props => (props.time > 130) && `
        opacity: 0.9;
    `}
    ${props => (props.time > 135) && `
        opacity: 0.7;
    `}
    ${props => (props.time > 140) && `
        opacity: 0.5;
    `}
    ${props => (props.time > 145) && `
        opacity: 0.3;
    `}
    ${props => (props.time > 150) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 155) && `
        display: none;
    `}

`
const Right = styled.img`
    position: fixed;
    width: 300px;
    left: calc( 200% - 300px - ${props => props.time}%);
    top: 40%;
    @media all and (max-width:600px) {
        left: 15%;
        width: 70%;
        left: calc(150% - ${props => props.time}%);
    }

    ${props => (props.time < 10) && `
        display: none;
    `}

    ${props => (props.time > 130) && `
        opacity: 0.9;
    `}
    ${props => (props.time > 135) && `
        opacity: 0.7;
    `}
    ${props => (props.time > 140) && `
        opacity: 0.5;
    `}
    ${props => (props.time > 145) && `
        opacity: 0.3;
    `}
    ${props => (props.time > 150) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 155) && `
        display: none;
    `}
`

const Center = styled.img`
    position: fixed;
    width: 300px;
    left: calc(50% - 150px);
    top: 40%;
    @media all and (max-width:600px) {
        left: 15%;
        width: 70%;
    }

    ${props => (props.time < 130) && `
        display: none;
        
    `}


    ${props => (props.time > 320) && `
        opacity: 0.5;
    `}

    ${props => (props.time > 330) && `
        opacity: 0.3;
    `}

    ${props => (props.time > 340) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 345) && `
        display: none;
    `}
    

`
const Shadow = styled.img`
    position: fixed;
    width: 300px;
    opacity: 0;
    left: calc(50% - 150px);
    top: 40%;
    @media all and (max-width:600px) {
        left: 15%;
        width: 70%;
    }

    ${props => (props.time < 180) && `
        display: none;
    `}

${props => (props.time > 15) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 180) && `
        opacity: 0.2;
    `}
    ${props => (props.time > 185) && `
        opacity: 0.3;
    `}
    ${props => (props.time > 190) && `
        opacity: 0.4;
    `}
    ${props => (props.time > 195) && `
        opacity: 0.5;
    `}
    ${props => (props.time > 200) && `
        opacity: 0.6;
    `}
    ${props => (props.time > 205) && `
        opacity: 0.7;
    `}
    ${props => (props.time > 210) && `
        opacity: 0.8;
    `}
    ${props => (props.time > 215) && `
        opacity: 0.9;
    `}
    ${props => (props.time > 220) && `
        opacity: 1;
    `}
    ${props => (props.time > 250) && `
        opacity: 0.9;
    `}
    ${props => (props.time > 250) && `
        opacity: 0.8;
    `}
    ${props => (props.time > 255) && `
        opacity: 0.7;
    `}
    ${props => (props.time > 260) && `
        opacity: 0.6;
    `}
    ${props => (props.time > 270) && `
        opacity: 0.5;
    `}
    ${props => (props.time > 275) && `
        opacity: 0.4;
    `}
    ${props => (props.time > 280) && `
        opacity: 0.3;
    `}
    ${props => (props.time > 285) && `
        opacity: 0.2;
    `}
    ${props => (props.time > 290) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 295) && `
        display: none;
    `}

`
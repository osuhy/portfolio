import styled from 'styled-components'

const Package = ({props}) =>
    <div>
        <Block1 time={((props - 8000 )  / 10)} src='/img/package/block01.png' />
        <Block2 time={((props - 8100 )  / 10)} src='/img/package/block02.png' />
        <Block3 time={((props - 8200 )  / 10)} src='/img/package/block01.png' />
        <Block4 time={((props - 8300 )  / 10)} src='/img/package/block01.png' />
        <Block5 time={((props - 8400 )  / 10)} src='/img/package/block03.png' />
        <Letter time={((props - 8500 )  / 10)} src='/img/package/package.png' />
        <Shadow time={((props - 8500 )  / 10)} src='/img/package/shadow.png' />
        <Block time={((props - 9500 )  / 10)} />
    </div>

export default Package

const Block = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #333366;
    z-index: 2;
    top: ${props=> props.time - 100}%;
    ${props => (props.time < 10) && `
        display: none
    `}
`


const Letter = styled.img`
    position: fixed;
    width: 400px;
    right: ${props=> props.time - 30 }%;
    bottom: 10%;
    ${props => (props.time < 10) && `
        display: none
    `}
    ${props => (props.time > 50) && `
        right: calc(50% - 200px);
    `}
    @media all and (max-width:600px) {
        width: 60%;
        bottom: 15%;
        right: ${props=> props.time - 30 }%;
        ${props => (props.time > 50) && `
            right: 20%;
        `}

    }

`
const Shadow = styled.img`
    position: fixed;
    width: 400px;
    right: calc(50% - 200px);
    bottom: 10%;
    ${props => (props.time < 70) && `
        display: none
    `}
    @media all and (max-width:600px) {
        width: 60%;
        bottom: 15%;
        right: 20%;

    }

`

const Block1 = styled.img`
    position: fixed;
    width: 150px;
    left: calc(50% - 410px);
    top:  ${props => props.time - 50}%;

    ${props => (props.time < 10) && `
        display: none
    `}
    ${props => (props.time > 40) && `
        top: -10%;
    `}
    @media all and (max-width:600px) {
        left: 10%;
        width: 13%;
        top:  ${props => props.time}%;
        ${props => (props.time > 20) && `
        top: 20%;
        `}
    }

`
const Block2 = styled.img`
    position: fixed;
    width: 20px;
    left: calc(50% - 240px);
    top:  ${props => props.time - 50}%;

    ${props => (props.time < 10) && `
        display: none
    `}
    ${props => (props.time > 60) && `
        top: 10%;
    `}
    @media all and (max-width:600px) {
        left: 26%;
        width: 1.5%;
        top:  ${props => props.time}%;
        ${props => (props.time > 30) && `
        top: 30%;
        `}
    }
`
const Block3 = styled.img`
    position: fixed;
    width: 150px;
    left: calc(50% - 200px);
    top:  ${props => props.time - 50}%;

    ${props => (props.time < 10) && `
        display: none
    `}
    ${props => (props.time > 30) && `
        top: -20%;
    `}

@media all and (max-width:600px) {
        left: 30.5%;
        width: 13%;
        top:  ${props => props.time}%;
        ${props => (props.time > 15) && `
        top: 15%;
        `}
    }

`
const Block4 = styled.img`
    position: fixed;
    width: 150px;
    left: calc(50% - 30px);
    top:  ${props => props.time - 50}%;

    ${props => (props.time < 10) && `
        display: none 
    `}
    ${props => (props.time > 50) && `
        top: 0%;
    `}
    @media all and (max-width:600px) {
        left: 46.5%;
        width: 13%;
        top:  ${props => props.time}%;
        ${props => (props.time > 25) && `
        top: 25%;
        `}
    }

`
const Block5 = styled.img`
    position: fixed;
    width: 300px;
    left: calc(50% + 140px);
    top:  ${props => props.time - 50}%;

    ${props => (props.time < 10) && `
        display: none
    `}
    ${props => (props.time > 60) && `
        top: 10%;
    `}
    @media all and (max-width:600px) {
        left: 62.5%;
        width: 26%;
        top:  ${props => props.time}%;
        ${props => (props.time > 30) && `
        top: 30%;
        `}
    }

`

import styled from 'styled-components'
const Contact = ({props}) =>
<div>
<Name time={((props - 12000 )  / 10)} src='/img/contact/name.png' />
<Info time={((props - 12000 )  / 10)} src='/img/contact/info.png' />

</div>

export default Contact

const Name = styled.img`
    position: fixed;
    width: 500px;
    left: 50px;
    top: 50px;
    opacity: 0;
  
    @media all and (max-width:600px) {
        width: 50%;
    }

    ${props => (props.time < 10) && `
        display: none;
    `}
    ${props => (props.time > 50) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 100) && `
        opacity: 0.2;
    `}
    ${props => (props.time > 150) && `
        opacity: 0.3;
    `}
    ${props => (props.time > 200) && `
        opacity: 0.4;
    `}
    ${props => (props.time > 300) && `
        opacity: 0.5;
    `}
    ${props => (props.time > 350) && `
        opacity: 0.6;
    `}
    ${props => (props.time > 400) && `
        opacity: 0.7;
    `}
    ${props => (props.time > 450) && `
        opacity: 0.8;
    `}
    ${props => (props.time > 500) && `
        opacity: 0.9;
    `}
    ${props => (props.time > 550) && `
        opacity: 1;
    `}
`

const Info = styled.img`
    position: fixed;
    width: 400px;
    right: 50px;
    bottom: 50px;
    opacity: 0;

    @media all and (max-width:600px) {
        width: 60%;
    }

    ${props => (props.time < 10) && `
        display: none;
    `}
    ${props => (props.time > 50) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 100) && `
        opacity: 0.2;
    `}
    ${props => (props.time > 150) && `
        opacity: 0.3;
    `}
    ${props => (props.time > 200) && `
        opacity: 0.4;
    `}
    ${props => (props.time > 300) && `
        opacity: 0.5;
    `}
    ${props => (props.time > 350) && `
        opacity: 0.6;
    `}
    ${props => (props.time > 400) && `
        opacity: 0.7;
    `}
    ${props => (props.time > 450) && `
        opacity: 0.8;
    `}
    ${props => (props.time > 500) && `
        opacity: 0.9;
    `}
    ${props => (props.time > 550) && `
        opacity: 1;
    `}
`

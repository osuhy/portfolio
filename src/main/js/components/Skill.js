import styled from 'styled-components'

const Skill = ({props}) =>
<div>
    <Simbol time={((props - 10000 )  / 10)} size={110} src='/img/skill/tag.png'/>
    <Simbol time={((props - 10500 )  / 10)} size={50} src='/img/skill/and.png'/>
    <Simbol time={((props - 11000 )  / 10)} size={65} src='/img/skill/ms.png'/>
    <Simbol time={((props - 11500 )  / 10)} size={100} src='/img/skill/web.png'/>
    <Simbol time={((props - 12000 )  / 10)} size={160} src='/img/skill/design.png'/>
    <Simbol time={((props - 12500 )  / 10)} size={100} src='/img/skill/dev.png'/>
    <Logo time={((props - 14000 )  / 10)} src='/img/skill/ai.png'/>
    <Logo time={((props - 14100 )  / 10)} src='/img/skill/ps.png'/>
    <Logo time={((props - 14200 )  / 10)} src='/img/skill/id.png'/>
    <Logo time={((props - 14300 )  / 10)} src='/img/skill/ae.png'/>
    <Logo time={((props - 14400 )  / 10)} src='/img/skill/pr.png'/>
    <Logo time={((props - 14500 )  / 10)} src='/img/skill/id.png'/>
    <Logo time={((props - 14600 )  / 10)} src='/img/skill/maya.png'/>
    <Logo time={((props - 14700 )  / 10)} src='/img/skill/html.png'/>
    <Logo time={((props - 14800 )  / 10)} src='/img/skill/sass.png'/>
    <Logo time={((props - 14900 )  / 10)} src='/img/skill/node.png'/>
    <Logo time={((props - 15000 )  / 10)} src='/img/skill/vue.png'/>
    <Logo time={((props - 15100 )  / 10)} src='/img/skill/react.png'/>
</div>


const Simbol = styled.img`
    position: fixed;
    height: 100px;
    left: calc(50% - ${props => props.size}px);
    top: calc(50% - 50px);
    ${props => (props.time < 10) && `
        display: none;
    `}

    ${props => (props.time > 15) && `
        opacity: 0.9;
    `}
    ${props => (props.time > 16) && `
        opacity: 0.7;
    `}
    ${props => (props.time > 17) && `
        opacity: 0.5;
    `}
    ${props => (props.time > 18) && `
        opacity: 0.3;
    `}
    ${props => (props.time > 19) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 20) && `
        display: none;
    `}


`

const Logo = styled.img`
    position: fixed;
    height: 200px;
    left: calc(50% - 100px);
    top: calc(50% - 100px);
    ${props => (props.time < 10) && `
        display: none;
    `}

    ${props => (props.time > 15) && `
        opacity: 0.9;
    `}
    ${props => (props.time > 17) && `
        opacity: 0.7;
    `}
    ${props => (props.time > 19) && `
        opacity: 0.5;
    `}
    ${props => (props.time > 21) && `
        opacity: 0.3;
    `}
    ${props => (props.time > 23) && `
        opacity: 0.1;
    `}
    ${props => (props.time > 25) && `
        display: none;
    `}


`


export default Skill
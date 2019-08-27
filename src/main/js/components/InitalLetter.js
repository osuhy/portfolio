import styled from 'styled-components'

const InitalLetter = ({props}) =>
    <div>
        <Block time={((props - 2500 )  / 10)} loc={500} />
        <Block time={((props - 2700 )  / 10)} loc={560} />
        <Block time={((props - 2900 )  / 10)} loc={670} />
        <Block time={((props - 3000 )  / 10)} loc={420} />
        <Block time={((props - 3100 )  / 10)} loc={620} />
        <LetterO time={((props - 800 ) / 10)} src='/img/inital-letter/o.png' />
        <LetterS time={((props - 300 ) / 10)} src='/img/inital-letter/s.png' />
        <LetterH time={((props - 500 ) / 10)} src='/img/inital-letter/h.png' />
    </div>

export default InitalLetter

const Block = styled.div`
    position: fixed;
    width: 100%;
    height: 0px;
    background: #333366;
    z-index: 2;
    height: ${props => 2*props.time}px;
    top: calc(${props =>props.loc }px - ${props => props.time }px);
`

const LetterO = styled.img`
    position: fixed;
    width: 150px;

    left: calc(50% - 145px);
    top: ${props => props.time}%;

    transform: rotate( -10deg );
    ${props => (props.time < 10) && `
        display: none
    `}

    ${props => props.time > 18 && `
        top: 180px
    `}

    ${props => props.time > 40 && `
        top: 180px
        left: calc(50% - 150px);
        transform: rotate( -20deg );
    `}
    ${props => props.time > 45 && `
        top: 185px
        left: calc(50% - 160px);
        transform: rotate( -30deg );
    `}
    ${props => props.time > 50 && `
        top: 190px
        left: calc(50% - 170px);
        transform: rotate( -40deg );
    `}
    ${props => props.time > 55 && `
        top: 220px
        left: calc(50% - 180px);
        transform: rotate( -55deg );
    `}
    ${props => props.time > 57 && `
        top: 220px
        left: calc(50% - 180px);
        transform: rotate( -70deg );
    `}
    ${props => props.time > 60 && `
        top: 220px
        left: calc(50% - 180px);
        transform: rotate( -85deg );
    `}
    ${props => props.time > 65 && `
        top: 220px
        left: calc(50% - 200px);
        transform: rotate( -120deg );
    `}
    ${props => props.time > 70 && `
        top: 220px
        left: calc(50% - 240px);
        transform: rotate( -150deg );
    `}
    ${props => props.time > 75 && `
        top: 240px
        left: calc(50% - 250px);
        transform: rotate( -170deg );
    `}
    ${props => props.time > 80 && `
        top: 280px
        left: calc(50% - 270px);
        transform: rotate( -170deg );
    `}
    ${props => props.time > 85 && `
        top: 300px
        left: calc(50% - 270px);
        transform: rotate( -170deg );
    `}
    ${props => props.time > 90 && `
        top: 320px
        left: calc(50% - 260px);
        transform: rotate( -170deg );
    `}
    ${props => props.time > 90 && `
        top: 340px
        left: calc(50% - 280px);
        transform: rotate( -180deg );
    `}
    ${props => props.time > 95 && `
        top: 360px
        left: calc(50% - 270px);
        transform: rotate( -190deg );
    `}
    ${props => props.time > 100 && `
        top: 380px
        left: calc(50% - 250px);
        transform: rotate( -185deg );
    `}
    ${props => props.time > 105 && `
        top: 400px
        left: calc(50% - 250px);
        transform: rotate( -185deg );
    `}
    ${props => props.time > 110 && `
        top: 400px
        left: calc(50% - 250px);
        transform: rotate( -185deg );
    `}
    ${props => props.time > 115 && `
        top: 420px
        left: calc(50% - 250px);
        transform: rotate( -185deg );
    `}
    ${props => props.time > 120 && `
        top: 440px
        left: calc(50% - 240px);
        transform: rotate( -180deg );
    `}
    ${props => props.time > 125 && `
        top: 440px
        left: calc(50% - 240px);
        transform: rotate( -175deg );
    `}
    ${props => props.time > 130 && `
        top: 440px
        left: calc(50% - 240px);
        transform: rotate( -180deg );
    `}

    
`

const LetterS = styled.img`
    position: fixed;
    width: 150px;

    left: calc(50% - 135px);
    top: ${props => props.time}%;

    transform: rotate( -50deg );
    ${props => (props.time < 10) && `
        display: none
    `}

    ${props => props.time > 45 && `
        top: 400px
    `}
    ${props => props.time > 120 && `
        top: 400px
        left: calc(50% - 125px);
        transform: rotate( -40deg );
    `}
    ${props => props.time > 130 && `
        top: 410px
        left: calc(50% - 115px);
        transform: rotate( -30deg );
    `}
    ${props => props.time > 140 && `
        top: 420px
        left: calc(50% - 105px);
        transform: rotate( -20deg );
    `}
    ${props => props.time > 150 && `
        top: 430px
        left: calc(50% - 95px);
        transform: rotate( -10deg );
    `}
    ${props => props.time > 160 && `
        top: 440px
        left: calc(50% - 85px);
        transform: rotate( 0deg );
    `}
    ${props => props.time > 170 && `
        top: 440px
        left: calc(50% - 85px);
        transform: rotate( +5deg );
    `}
    ${props => props.time > 180 && `
        top: 440px
        left: calc(50% - 85px);
        transform: rotate( 0deg );
    `}
    
`

const LetterH = styled.img`
    position: fixed;
    width: 150px;

    left: calc(50% + 5px);
    top: ${props => props.time}%;

    transform: rotate( +35deg );
    ${props => (props.time < 10) && `
        display: none
    `}

    ${props => props.time > 30 && `
        top: 290px
    `}
    ${props => props.time > 100 && `
        top: 300px
        left: calc(50% + 25px);
        transform: rotate( +25deg );
    `}
    ${props => props.time > 110 && `
        top: 320px
        left: calc(50% + 35px);
        transform: rotate( +20deg );
    `}
    ${props => props.time > 120 && `
        top: 340px
        left: calc(50% + 45px);
        transform: rotate( +15deg );
    `}
    ${props => props.time > 130 && `
        top: 360px
        left: calc(50% + 50px);
        transform: rotate( +10deg );
    `}
    
    ${props => props.time > 140 && `
        top: 380px
        left: calc(50% + 55px);
        transform: rotate( +5deg );
    `}
    
    ${props => props.time > 150 && `
        top: 400px
        left: calc(50% + 60px);
        transform: rotate( 0deg );
    `}
    ${props => props.time > 160 && `
        top: 420px
        left: calc(50% + 65px);
        transform: rotate( -5deg );
    `}
    ${props => props.time > 170 && `
        top: 440px
        left: calc(50% + 70px);
        transform: rotate( 0deg );
    `}
    
`
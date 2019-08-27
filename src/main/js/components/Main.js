import {Component} from 'react'
import styled from 'styled-components'
import InitalLetter from './InitalLetter'
import Typograph from './Typograph'
import Package from './Package'


class Main extends Component {

    componentWillMount() {
        const scrollTop = 0
        this.setState({scrollTop})
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    onScroll = (e) => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop)
        this.setState({scrollTop})
        console.log(scrollTop)
    }


    render() {
        return (

            <Container>
                    {this.state.scrollTop < 3500 && <InitalLetter props={this.state.scrollTop} /> }
                    {this.state.scrollTop < 7500 && <Typograph props={this.state.scrollTop} /> }
                    {this.state.scrollTop < 10500 && <Package props={this.state.scrollTop} /> }
            </Container>

        )
    }



}

const Container = styled.div`
    background: #333366;
    position: absolute;
    width: 100%;
    height: 15000px;
    top:0%;
    left:0%;
`

const T = styled.div`
    background: #333366;
    position: absolute;
    width: 100%;
    height: 500%;
    top:0%;
    left:0%;
`

const ViewPort = styled.div`
    position: fixed;
    width: 600px;
    height: 100%;
    background: white;
    top: 0%;
    left: calc(50% - 300px);
    @media all and (max-width:600px) {
        left: 0px;
        width: 100%;
    }


`
const Section1 = styled.div`
    position: absolute;
    background: black;
    top: 1000px;
    width: 500px;
    height: 30%;
    left: calc(50% - 250px);
    @media all and (max-width:500px) {
        left: 0px;
        width: 100%;
        background: red;
    }
`

export default Main
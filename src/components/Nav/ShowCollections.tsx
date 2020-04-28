import styled from 'styled-components'
import { useState, useContext, useRef, useEffect } from 'react'
import { CollectionsContext } from "../../contexts/CollectionsContext";
import { TweenMax, TimelineMax, Power3, Elastic, Back } from 'gsap'

interface IProps {
    targeted: boolean;
    collections: {
        collections: [];
        current: string;
        open: boolean;
    };
};

const ShowCollections: React.FC= () => {
    const [ targeted, setTargeted ] = useState<boolean>(false);
    const { collections, dispatch } = useContext(CollectionsContext);

    let button = useRef<HTMLDivElement>(null);
    console.log(button)


    // let Anim = TweenMax.to(button.current, 2, {position: 'fixed', xPercent: '-50', left: '50%',
    //     ease: Power3.easeIn, transform: "scale(10)", paused: true});

        console.log(button)
    useEffect(() => {

        // if(collections.open === true) {
        //     Anim.play()
        // }else {
        //     Anim.reverse()
        // }
    },[collections])

    let handleClick = () => {
        dispatch({type: "openCollections", boolean: !collections.open})

    }


    return (
        <ShowCollectionsContainer ref={button}
            onClick={handleClick}
            onMouseEnter={() => setTargeted(true)}
            onMouseLeave={() => setTargeted(false)} >
                <TopSquare targeted={targeted} collections={collections}></TopSquare>
                <MiddleSquare targeted={targeted} collections={collections}></MiddleSquare>
                <BottomSquare targeted={targeted} collections={collections}></BottomSquare>
                <TopCircle targeted={targeted} collections={collections}></TopCircle>
                <LeftCircle targeted={targeted} collections={collections}></LeftCircle>
                <RightCircle targeted={targeted} collections={collections}></RightCircle>
                <BottomCircle targeted={targeted} collections={collections}></BottomCircle>
                <LeftTriangle targeted={targeted} collections={collections}></LeftTriangle>
                <RightTriangle targeted={targeted} collections={collections}></RightTriangle>
        </ShowCollectionsContainer>
    )
}


const ShowCollectionsContainer = styled.div`
    position: relative;
    top: 50%;
    transform: translatey(-50%);
    height: 60px;
    width: 60px;
    margin: auto;
    display: flex;

`

const Shape = styled.div<IProps>`
    height: 8px;
    width: 8px;
    background-color: ${props => props.targeted || props.collections.open ?"#000000" :"#DBDBDB"};
    border-color: ${props => props.targeted || props.collections.open ? "#000000" : "#DBDBDB"};
    border-color: transparent transparent ${props => props.targeted || props.collections.open ? "#000000" : "#DBDBDB"} transparent;
    _border-color: #ffffff #ffffff #DBDBDB #ffffff;
`
const TopSquare = styled(Shape)`
    position: absolute;

` 
const MiddleSquare = styled(Shape)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform:  translate(-50%, -50%);
` 
const BottomSquare = styled(Shape)`
    position: absolute;
    right: 0;
    bottom: 0%;
` 

const TopCircle = styled(Shape)`
    position: absolute;
    left: 50%;
    top: 0;
    border-radius: 50%;
    transform:  translateX(-50%);

` 

const LeftCircle = styled(Shape)`
    position: absolute;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);

` 

const RightCircle = styled(Shape)`
    position: absolute;
    top: 50%;
    right: 0;
    border-radius: 50%;
    transform: translateY(-50%);

` 
const BottomCircle = styled(Shape)`
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
` 

const LeftTriangle = styled(Shape)`
    background-color: unset;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 8.7px 5px;
    line-height: 0px;
    _filter: progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');
` 
const RightTriangle = styled(Shape)`
    background-color: unset;
    position: absolute;
    top:0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 8.7px 5px;
    line-height: 0px;
    _filter: progid:DXImageTransform.Microsoft.Chroma(color='#ffffff');
` 




export default ShowCollections
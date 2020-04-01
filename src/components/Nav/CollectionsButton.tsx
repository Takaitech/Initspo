import styled from 'styled-components'
import { useState } from 'react'

const CollectionsButton = () => {

    const [targeted, setTargeted] = useState(false);


    return (
        <CollectionsContainer 
            onMouseEnter={() => setTargeted(true)}
            onMouseLeave={() => setTargeted(false)} >
                <TopSquare></TopSquare>
                <MiddleSquare></MiddleSquare>
                <BottomSquare></BottomSquare>
                <TopCircle></TopCircle>
                <LeftCircle></LeftCircle>
                <RightCircle></RightCircle>
                <BottomCircle></BottomCircle>
                <LeftTriangle></LeftTriangle>
                <RightTriangle></RightTriangle>
        </CollectionsContainer>
    )
}

const CollectionsContainer = styled.div`
    position: relative;
    top: 50%;
    transform: translatey(-50%);
    height: 60px;
    width: 60px;
    margin: auto;
    display: flex;

`

const Shape = styled.div`
    background-color: #DBDBDB;
    border-color: #DBDBDB;
    height: 8px;
    width: 8px;
    border-color: transparent transparent #DBDBDB transparent;
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


export default CollectionsButton
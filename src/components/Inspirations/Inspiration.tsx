import styled from 'styled-components';
import { useState } from 'react';

interface Props {
    key: number;
    content: { 
        url: string;
        dimensions: {
            width: number;
            height: number;
        };
    };

    onClick: (event: React.MouseEvent) => void;
    showGrid: boolean;
};


interface IProps {
    content: { 
        url: string;
        dimensions: {
            width: number;
            height: number;
        };
    };
    onClick: (event: React.MouseEvent) => void;
    showGrid: boolean;
    selected: boolean;
};



const Inspiration: React.FC<Props> = ({content, onClick, showGrid}) => {
    let [selected, setSelected] = useState(false);
    let handleClick = (event:React.MouseEvent) => {
        onClick(event);
        setSelected(!selected)

    }
        return (
            <BoxContainer content={content} onClick={(event:React.MouseEvent) => handleClick(event)} showGrid={showGrid} selected={selected}></BoxContainer>
        );
};

const BoxContainer = styled.li<IProps>`
    width: ${props => props.selected ? '100%' : props.content.dimensions.width /4 + 'px'};
    /* max-width: calc(100vw - 301px); */
    height: ${props => props.selected ? "400px" : props.content.dimensions.height/4 + 'px'};
    max-height: ${props => props.selected ? "unset" : '150px'};
    margin: 10px;
    background-image: url(${props=> props.content.url});
    background-size: cover;
    list-style: none;
    background-repeat: no-repeat;
    float: left;
    background-position: center;
    display: ${props => props.showGrid || props.selected ? "inline-block" : 'none'}
`




export default Inspiration;
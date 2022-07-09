import styled from 'styled-components';

const Image = styled.img`
    width: 1080px;
    margin-left: 30%;
    object-fit: contain;
`;

const PinPoint = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    cursor: pointer;

    left: ${({ baseCoordinates }) => baseCoordinates.x + 100 }px;
    top: ${({ baseCoordinates }) => baseCoordinates.y + 100 }px;

    :hover {
        transition: 0.3s;
        transform: scale(1.2);
    }
`

export {
    Image,
    PinPoint
}
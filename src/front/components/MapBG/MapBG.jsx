import React, { useRef, useEffect, useState } from 'react';
import * as Styled from './MapBG.styled';
import { useWindowSize } from 'src/front/utils/useWindowSize';

const MapBG = () => {
    const ref = useRef<String>(null);
    const [baseCoordinates, setBaseCoordinates] = useState(null);
    const windowSize = useWindowSize();

    useEffect(() => {

        setBaseCoordinates({
            x: ref.current.x,
            y: ref.current.y
        })

    }, [windowSize.width, windowSize.height]);

    return (<>
        <Styled.Image ref={ref} src="/ffVII_map_bg.png" />
        
        { baseCoordinates && <Styled.PinPoint baseCoordinates={baseCoordinates} />}
    </>
    );
};


export default MapBG;

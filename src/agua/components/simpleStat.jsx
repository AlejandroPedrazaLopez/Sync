import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Text from '../components/base-components/text.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_SimpleStat: state.Default.backgroundColor ? state.Default.backgroundColor : state.SimpleStat.backgroundColor, 
shadowColor_SimpleStat: state.Default.shadowColor ? state.Default.shadowColor : state.SimpleStat.shadowColor, 
bodyColor_SimpleStat: state.Default.bodyColor ? state.Default.bodyColor : state.SimpleStat.bodyColor, 
titleColor_SimpleStat: state.Default.titleColor ? state.Default.titleColor : state.SimpleStat.titleColor, 

    }
}

function SimpleStat(props) {
    let {backgroundColor_SimpleStat, shadowColor_SimpleStat, bodyColor_SimpleStat, titleColor_SimpleStat} = props;
    backgroundColor_SimpleStat = props['backgroundColor'] ? props['backgroundColor'] : backgroundColor_SimpleStat;
shadowColor_SimpleStat = props['shadowColor'] ? props['shadowColor'] : shadowColor_SimpleStat;
bodyColor_SimpleStat = props['bodyColor'] ? props['bodyColor'] : bodyColor_SimpleStat;
titleColor_SimpleStat = props['titleColor'] ? props['titleColor'] : titleColor_SimpleStat;

    return(
        
<Layer id="simplestat-1"  backgroundColor={backgroundColor_SimpleStat}
shadowColor={shadowColor_SimpleStat}
backgroundColor={backgroundColor_SimpleStat}
shadowColor={shadowColor_SimpleStat} 
  
radiusAbsolute={'0.8825638727028238vh'} shadowOffsetX={'0undefined'}shadowOffsetY={'1undefined'}shadowBlur={'4'}
  padding-top={'5vw'} 
padding-bottom={'5vw'} 
padding-left={'5vw'} 
padding-right={'20vw'} 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-1-copy" content="Total subscribers"  backgroundColor={bodyColor_SimpleStat}
backgroundColor={bodyColor_SimpleStat} 
  
 fontSize={'16pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-2-copy" content="71,893"  backgroundColor={titleColor_SimpleStat}
backgroundColor={titleColor_SimpleStat} 
  
 fontSize={'24pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
    );
}

export default connect(mapStateToProps, {})(SimpleStat);
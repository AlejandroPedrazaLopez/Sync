import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Icon from '../components/base-components/icon.jsx';
import Text from '../components/base-components/text.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        primaryColor_IconBadge: state.Default.primaryColor ? state.Default.primaryColor : state.IconBadge.primaryColor, 

    }
}

function IconBadge(props) {
    let {primaryColor_IconBadge} = props;
    primaryColor_IconBadge = props['primaryColor'] ? props['primaryColor'] : primaryColor_IconBadge;

    return(
        
<Layer id="iconbadge-1"  backgroundColor={primaryColor_IconBadge} 
orientation={'flexDirection=row'} 
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'2.0210221979203156vh'}   padding-top={'2px'} 
padding-bottom={'4px'} 
padding-left={'8px'} 
padding-right={'8px'} 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Icon id="icon-1-copy" content="map"    
 color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 fontSize={'3vh'}
 />
<Text id="text-1-copy" content="Map"   
  
 fontSize={'16pt'}
 
 margin-left={'4px'} 
 color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
    );
}

export default connect(mapStateToProps, {})(IconBadge);
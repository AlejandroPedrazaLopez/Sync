import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Text from '../components/base-components/text.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        titleColor_GreetingsTitle: state.Default.titleColor ? state.Default.titleColor : state.GreetingsTitle.titleColor, 
bodyColor_GreetingsTitle: state.Default.bodyColor ? state.Default.bodyColor : state.GreetingsTitle.bodyColor, 

    }
}

function GreetingsTitle(props) {
    let {titleColor_GreetingsTitle, bodyColor_GreetingsTitle} = props;
    titleColor_GreetingsTitle = props['titleColor'] ? props['titleColor'] : titleColor_GreetingsTitle;
bodyColor_GreetingsTitle = props['bodyColor'] ? props['bodyColor'] : bodyColor_GreetingsTitle;

    return(
        
<Layer id="greetingstitle-1"   
  
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-1-copy" content="Hi Joe ✌️!"  backgroundColor={titleColor_GreetingsTitle}
backgroundColor={titleColor_GreetingsTitle} 
  
 fontSize={'32pt'}
 textWeight={'fontWeight=bold'}
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-2-copy" content="Are you looking for greatness?"  backgroundColor={bodyColor_GreetingsTitle}
backgroundColor={bodyColor_GreetingsTitle} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
    );
}

export default connect(mapStateToProps, {})(GreetingsTitle);
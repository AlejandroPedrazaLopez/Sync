import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Image from '../components/base-components/image.jsx';
import Text from '../components/base-components/text.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_Card: state.Default.backgroundColor ? state.Default.backgroundColor : state.Card.backgroundColor, 
shadowColor_Card: state.Default.shadowColor ? state.Default.shadowColor : state.Card.shadowColor, 
titleColor_Card: state.Default.titleColor ? state.Default.titleColor : state.Card.titleColor, 
bodyColor_Card: state.Default.bodyColor ? state.Default.bodyColor : state.Card.bodyColor, 
primaryColor_Card: state.Default.primaryColor ? state.Default.primaryColor : state.Card.primaryColor, 

    }
}

function Card(props) {
    let {backgroundColor_Card, shadowColor_Card, titleColor_Card, bodyColor_Card, primaryColor_Card} = props;
    backgroundColor_Card = props['backgroundColor'] ? props['backgroundColor'] : backgroundColor_Card;
shadowColor_Card = props['shadowColor'] ? props['shadowColor'] : shadowColor_Card;
titleColor_Card = props['titleColor'] ? props['titleColor'] : titleColor_Card;
bodyColor_Card = props['bodyColor'] ? props['bodyColor'] : bodyColor_Card;
primaryColor_Card = props['primaryColor'] ? props['primaryColor'] : primaryColor_Card;

    return(
        
<Layer id="card-1"  backgroundColor={backgroundColor_Card}
shadowColor={shadowColor_Card} 
  
radiusAbsolute={'5.898016997167143vw'} shadowOffsetX={'0undefined'}shadowOffsetY={'0undefined'}shadowBlur={'10'}
   margin-top={'5vw'} 
margin-bottom={'5vw'} 
margin-left={'5vw'} 
margin-right={'5vw'} 
   valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Layer id="layer-2-copy"  backgroundColor={shadowColor_Card} 
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'1.4040788883908946vh'}    margin-top={'5vw'} 
margin-bottom={'5vw'} 
margin-left={'5vw'} 
margin-right={'5vw'} 
   valueheight={'30vh'}
 valuewidth={'width=100%'}
 >
<Image id="imageview-1-copy" alt="imageview-1-copy" src="https://i.ibb.co/5ndGgWv/image-43.png"   
  valueHeight={'16vh'}
 valuewidth={'width=100%'}
 />
</Layer>
<Text id="text-1-copy" content="Headline"  backgroundColor={titleColor_Card} 
  
 fontSize={'18pt'}
 textWeight={'fontWeight=bold'}
 margin-left={'5vw'} 
margin-right={'5vw'} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-2-copy" content="Here is a card description. This is better between 1 and 3 lines tall."  backgroundColor={bodyColor_Card} 
  
 fontSize={'14pt'}
 
 margin-top={'2vw'} 
margin-left={'5vw'} 
margin-right={'5vw'} 
   valueheight={'fit-content'}
 valuewidth={'width=100%'}
 />
<Layer id="layer-3-copy"   
 
secondaryAxisAlign={'alignItems=flex-end'} 
    margin-top={'5vw'} 
margin-bottom={'5vw'} 
margin-left={'5vw'} 
margin-right={'5vw'} 
 backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Layer id="layer-4-copy"  backgroundColor={primaryColor_Card} 
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'2.181383535036609vh'}       valueheight={'fit-content'}
 valuewidth={'fit-content'}
 >
<Text id="text-3-copy" content="Action"   
  
 fontSize={'16pt'}
 textWeight={'fontWeight=bold'}
 margin-top={'3px'} 
margin-bottom={'6px'} 
margin-left={'12px'} 
margin-right={'12px'} 
 color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
</Layer>
    );
}

export default connect(mapStateToProps, {})(Card);
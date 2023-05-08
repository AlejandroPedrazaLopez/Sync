import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Text from '../components/base-components/text.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        
    }
}

function Debitcard(props) {
    let {} = props;
     = props[''] ? props[''] : ;

    return(
        
<Layer id="debitcard-1"   
  
radiusAbsolute={'1.6808606006275213vh'}   padding-top={'10px'} 
padding-bottom={'10px'} 
padding-left={'10px'} 
padding-right={'10px'} 
 margin-top={'5vw'} 
margin-bottom={'5vw'} 
margin-left={'5vw'} 
margin-right={'5vw'} 
 backgroundColor={'#ff2d55'}
  valueheight={'150px'}
 valuewidth={'273px'}
 >
<Text id="text-1-copy" content="Debit card"   
  
 fontSize={'14pt'}
 
  color={'#ffffff'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Layer id="layer-2-copy"   
orientation={'flexDirection=row'}  
    margin-top={'54px'} 
 backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-2-copy" content="**** **** ****"   
  
 fontSize={'12pt'}
 
 margin-top={'2px'} 
 color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-4-copy" content="1234"   
  
 fontSize={'18pt'}
 
 margin-left={'2px'} 
 color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
<Layer id="layer-3-copy"   
orientation={'flexDirection=row'} 
primaryAxisAlign={'justifyContent=space-between'}
secondaryAxisAlign={'alignItems=center'} 
     backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-5-copy" content="Valid Thru 08/23"   
  
 fontSize={'14pt'}
 
 margin-top={'3vh'} 
 color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Text id="text-7-copy" content="VISA"   
  
 fontSize={'20pt'}
 textWeight={'fontWeight=bold'}
  color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
    );
}

export default connect(mapStateToProps, {})(Debitcard);
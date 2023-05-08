import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Image from '../components/base-components/image.jsx';
import Text from '../components/base-components/text.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_SignIn: state.Default.backgroundColor ? state.Default.backgroundColor : state.SignIn.backgroundColor, 
titleColor_SignIn: state.Default.titleColor ? state.Default.titleColor : state.SignIn.titleColor, 
shadowColor_SignIn: state.Default.shadowColor ? state.Default.shadowColor : state.SignIn.shadowColor, 
primaryColor_SignIn: state.Default.primaryColor ? state.Default.primaryColor : state.SignIn.primaryColor, 

    }
}

function SignIn(props) {
    let {backgroundColor_SignIn, titleColor_SignIn, shadowColor_SignIn, primaryColor_SignIn} = props;
    backgroundColor_SignIn = props['backgroundColor'] ? props['backgroundColor'] : backgroundColor_SignIn;
titleColor_SignIn = props['titleColor'] ? props['titleColor'] : titleColor_SignIn;
shadowColor_SignIn = props['shadowColor'] ? props['shadowColor'] : shadowColor_SignIn;
primaryColor_SignIn = props['primaryColor'] ? props['primaryColor'] : primaryColor_SignIn;

    return(
        
<Layer id="signin-1"  backgroundColor={backgroundColor_SignIn}
backgroundColor={backgroundColor_SignIn} 
 
secondaryAxisAlign={'alignItems=center'} 
   padding-top={'5vw'} 
padding-bottom={'5vw'} 
 margin-top={'5vw'} 
margin-bottom={'5vw'} 
margin-left={'5vw'} 
margin-right={'5vw'} 
   valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Image id="imageview-1-copy" alt="imageview-1-copy" src="https://i.ibb.co/5ndGgWv/image-43.png"   
  valueHeight={'11vh'}
 valueWidth={'28vw'}
 />
<Layer id="layer-2-copy"   
  
   padding-bottom={'1vh'} 
padding-left={'5vw'} 
padding-right={'5vw'} 
 margin-top={'5vw'} 
 backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-1-copy" content="Email"  backgroundColor={titleColor_SignIn}
backgroundColor={titleColor_SignIn} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Layer id="layer-5-copy"  shadowColor={shadowColor_SignIn}
shadowColor={shadowColor_SignIn} 
  
radiusAbsolute={'1.0785522187359955vh'} shadowOffsetX={'0undefined'}shadowOffsetY={'0undefined'}shadowBlur={'2'}
  padding-left={'3vw'} 
 margin-top={'2vh'} 
 backgroundColor={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-4-copy" content="Enter your email"  backgroundColor={shadowColor_SignIn}
backgroundColor={shadowColor_SignIn} 
  
 fontSize={'14pt'}
 
 margin-top={'3vw'} 
margin-bottom={'3vw'} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
<Layer id="layer-3-copy"   
  
   padding-bottom={'1vh'} 
padding-left={'5vw'} 
padding-right={'5vw'} 
 margin-top={'5vw'} 
 backgroundColor={'transparent'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-2-copy" content="Password"  backgroundColor={titleColor_SignIn}
backgroundColor={titleColor_SignIn} 
  
 fontSize={'14pt'}
 
    valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
<Layer id="layer-6-copy"  shadowColor={shadowColor_SignIn}
shadowColor={shadowColor_SignIn} 
  
radiusAbsolute={'0.3765127745405663vh'} shadowOffsetX={'0undefined'}shadowOffsetY={'0undefined'}shadowBlur={'2'}
  padding-left={'3vw'} 
 margin-top={'2vh'} 
 backgroundColor={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-5-copy" content="Enter your password"  backgroundColor={shadowColor_SignIn}
backgroundColor={shadowColor_SignIn} 
  
 fontSize={'14pt'}
 
 margin-top={'3vw'} 
margin-bottom={'3vw'} 
   valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
<Layer id="layer-4-copy"  backgroundColor={primaryColor_SignIn}
backgroundColor={primaryColor_SignIn} 
 
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'2.2946175637393766vw'}    margin-top={'5vw'} 
margin-left={'5vw'} 
margin-right={'5vw'} 
   valueheight={'fit-content'}
 valuewidth={'width=100%'}
 >
<Text id="text-3-copy" content="Sign in"   
  
 fontSize={'16pt'}
 textWeight={'fontWeight=bold'}
 margin-top={'4px'} 
margin-bottom={'6px'} 
 color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
    );
}

export default connect(mapStateToProps, {})(SignIn);
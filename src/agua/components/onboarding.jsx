import React from 'react';
import Layer from '../components/base-components/layer.jsx';
import Image from '../components/base-components/image.jsx';
import Text from '../components/base-components/text.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_Onboarding: state.Default.backgroundColor ? state.Default.backgroundColor : state.Onboarding.backgroundColor, 
titleColor_Onboarding: state.Default.titleColor ? state.Default.titleColor : state.Onboarding.titleColor, 
bodyColor_Onboarding: state.Default.bodyColor ? state.Default.bodyColor : state.Onboarding.bodyColor, 
primaryColor_Onboarding: state.Default.primaryColor ? state.Default.primaryColor : state.Onboarding.primaryColor, 

    }
}

function Onboarding(props) {
    let {backgroundColor_Onboarding, titleColor_Onboarding, bodyColor_Onboarding, primaryColor_Onboarding} = props;
    backgroundColor_Onboarding = props['backgroundColor'] ? props['backgroundColor'] : backgroundColor_Onboarding;
titleColor_Onboarding = props['titleColor'] ? props['titleColor'] : titleColor_Onboarding;
bodyColor_Onboarding = props['bodyColor'] ? props['bodyColor'] : bodyColor_Onboarding;
primaryColor_Onboarding = props['primaryColor'] ? props['primaryColor'] : primaryColor_Onboarding;

    return(
        
<Layer id="onboarding-1"  backgroundColor={backgroundColor_Onboarding}
backgroundColor={backgroundColor_Onboarding} 
 
secondaryAxisAlign={'alignItems=center'} 
   padding-top={'6vw'} 
padding-bottom={'6vw'} 
padding-left={'6vw'} 
padding-right={'6vw'} 
    valueheight={'flexGrow=1'}
 valuewidth={'width=100%'}
 >
<Image id="imageview-1-copy" alt="imageview-1-copy" src="https://i.ibb.co/5ndGgWv/image-43.png"   
  valueHeight={'55vh'}
 valuewidth={'width=100%'}
 />
<Text id="text-1-copy" content="Discover the World with us"  backgroundColor={titleColor_Onboarding}
backgroundColor={titleColor_Onboarding} 
  textAlign={'textAlign=center'}
 fontSize={'24pt'}
 textWeight={'fontWeight=bold'}
    valueheight={'fit-content'}
 valuewidth={'80%'}
 />
<Text id="text-2-copy" content="Experience the wonders of the planet booking with our user-friendly app"  backgroundColor={bodyColor_Onboarding}
backgroundColor={bodyColor_Onboarding} 
  textAlign={'textAlign=center'}
 fontSize={'14pt'}
 
 margin-top={'6vw'} 
   valueheight={'fit-content'}
 valuewidth={'80vw'}
 />
<Layer id="layer-2-copy"  backgroundColor={primaryColor_Onboarding}
backgroundColor={primaryColor_Onboarding} 
 
primaryAxisAlign={'justifyContent=center'}
secondaryAxisAlign={'alignItems=center'} 
radiusAbsolute={'0.8471537427162749vh'}    margin-top={'6vw'} 
   valueheight={'fit-content'}
 valuewidth={'80%'}
 >
<Text id="text-3-copy" content="Start your Adventure"   
  
 fontSize={'14pt'}
 
 margin-top={'3vw'} 
margin-bottom={'4vw'} 
 color={'#FFFFFF'}
  valueheight={'fit-content'}
 valuewidth={'fit-content'}
 />
</Layer>
</Layer>
    );
}

export default connect(mapStateToProps, {})(Onboarding);
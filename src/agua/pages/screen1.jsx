import React from 'react';
import Onboarding from '../components/onboarding.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_Onboarding: state.Default.backgroundColor ? state.Default.backgroundColor : state.Onboarding.backgroundColor, 

    }
}

function Screen1({backgroundColor_Onboarding}) {
    return(
        <div className="Screen1"    
        style={{display:'flex', 
            width:'100%', 
            height:'100%', 
            boxSizing:'border-box',  backgroundColor:'#FFFFFF', 
flexDirection:'column', justifyContent:'flex-start',
alignItems:'flex-start', overflowY:'scroll',
            }}
        >
            
<Onboarding />
        </div>
    );
}

export default connect(mapStateToProps, {})(Screen1);
            
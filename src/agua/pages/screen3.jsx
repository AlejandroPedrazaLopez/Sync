import React from 'react';
import SignIn from '../components/signIn.jsx';
import Debitcard from '../components/debitcard.jsx';
import IconBadge from '../components/iconBadge.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_SignIn: state.Default.backgroundColor ? state.Default.backgroundColor : state.SignIn.backgroundColor, 
primaryColor_IconBadge: state.Default.primaryColor ? state.Default.primaryColor : state.IconBadge.primaryColor, 

    }
}

function Screen3({backgroundColor_SignIn, primaryColor_IconBadge}) {
    return(
        <div className="Screen3"    
        style={{display:'flex', 
            width:'100%', 
            height:'100%', 
            boxSizing:'border-box',  backgroundColor:'#FFFFFF', 
flexDirection:'column', justifyContent:'flex-start',
alignItems:'flex-start', overflowY:'scroll',
            }}
        >
            
<SignIn />
<IconBadge />
        </div>
    );
}

export default connect(mapStateToProps, {})(Screen3);
            
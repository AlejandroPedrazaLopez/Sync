import React from 'react';
import SignIn from '../components/signIn.jsx';
import Debitcard from '../components/debitcard.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_SignIn: state.Default.backgroundColor ? state.Default.backgroundColor : state.SignIn.backgroundColor, 

    }
}

function Screen3({backgroundColor_SignIn}) {
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
<Debitcard />
        </div>
    );
}

export default connect(mapStateToProps, {})(Screen3);
            
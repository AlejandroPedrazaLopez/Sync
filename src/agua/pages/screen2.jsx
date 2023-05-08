import React from 'react';
import Card from '../components/card.jsx';
import GreetingsTitle from '../components/greetingsTitle.jsx';
import SimpleStat from '../components/simpleStat.jsx';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        backgroundColor_Card: state.Default.backgroundColor ? state.Default.backgroundColor : state.Card.backgroundColor, 
shadowColor_Card: state.Default.shadowColor ? state.Default.shadowColor : state.Card.shadowColor, 
backgroundColor_SimpleStat: state.Default.backgroundColor ? state.Default.backgroundColor : state.SimpleStat.backgroundColor, 
shadowColor_SimpleStat: state.Default.shadowColor ? state.Default.shadowColor : state.SimpleStat.shadowColor, 

    }
}

function Screen2({backgroundColor_Card, shadowColor_Card, backgroundColor_SimpleStat, shadowColor_SimpleStat}) {
    return(
        <div className="Screen2"    
        style={{display:'flex', 
            width:'100%', 
            height:'100%', 
            boxSizing:'border-box',  backgroundColor:'#FFFFFF', 
flexDirection:'column', justifyContent:'flex-start',
alignItems:'flex-start', overflowY:'scroll',
            }}
        >
            
<Card />
<GreetingsTitle />
<SimpleStat />
        </div>
    );
}

export default connect(mapStateToProps, {})(Screen2);
            
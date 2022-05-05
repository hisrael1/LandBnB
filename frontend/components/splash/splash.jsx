import React from 'react';
import Menu from '../Menu/Menu';

class Splash extends React.Component {

    render() {

        return(
            <div>
                <div id="header">
                    <p id='name'>
                        landbnb
                    </p>

                    <p id="search">
                        <input type="text" id="left-edge-search"/>
                        <input type="date" id="left-mid-search"/>
                        <input type="date" id="right-mid-search"/>
                        <input type="int" id="right-edge-search"/>
                    </p>

                    <Menu />
                </div>

                <div id='splash-main-pic-container'>
                    <img src={window.splash_main_pic} id="splash-main-pic"/>
                </div>
            </div>
        )
    }
}

export default Splash;
// export this into a splash container and then export that into App
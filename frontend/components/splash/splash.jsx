import React from 'react';
import Menu from '../Menu/Menu';

class Splash extends React.Component {

    render() {

        return(
            <div>
                <div id="container">
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

                <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <p id="inspiration">
                            Inspiration for your next trip
                        </p>

                        <br />
                        <br />
                        <br />

                        <div id="city-container" class="cities">
                            <div id='montauk' class="city">
                                <img src={window.montauk} id="montauk"/>
                                <p class="cty-text">Montauk</p>
                            </div>
                            <div id='lakegeorge' class="city">
                                <img src={window.lakegeorge} id="lakegeorge"/>
                                <p class="cty-text">Lake George</p>
                            </div>
                            <div id='newport' class="city">
                                <img src={window.newport} id="newport"/>
                                <p class="cty-text">Newport</p>
                            </div>
                            <div id='scranton' class="city">
                                <img src={window.scranton} id="scranton"/>
                                <p class="cty-text">
                                    Scranton
                                </p>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />


                        <div id="footer">
                            <div>
                                <p class="bold-footer">
                                    About
                                </p>
                            </div>

                            <div>
                                <p class="bold-footer">
                                    Resources
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Splash;
// export this into a splash container and then export that into App
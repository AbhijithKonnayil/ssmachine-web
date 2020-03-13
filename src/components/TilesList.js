import React, { Component } from 'react';
import '../css/tile-list.css'
import Tile from './Tile';

function importAll(r) {
    return r.keys().map(r);
  }
  
class TilesList extends Component {
    render() {
        const tiles = importAll(require.context('../img/brand-tiles/', false, /\.(png)$/));
        return (
            <div class="brand-area bg-img-2 overlay">
            <div class="container-xl p-lg-0">
                <div class="row justify-content-end no-gutters">
                    <div class="col-12 col-sm-12 col-lg-12">
                        <div class="text-white mb-65 ml-80 ">
                            <h3>Brands we are Specialized in</h3>
                            <Tile title="Aston Martin" image={tiles[0]}/>
                            <Tile title="Audi" image={tiles[1]}/>
                            <Tile title="Bentley" image="" image={tiles[2]}/>
                            <Tile title="BMW" image={tiles[3]}/>
                            <Tile title="Chevrolet" image={tiles[4]}/>
                            <Tile title="Dodge" image={tiles[5]}/>

                            <Tile title="Ferrari" image={tiles[6]}/>
                            <Tile title="Ford" image={tiles[7]}/>
                            <Tile title="GMC" image={tiles[8]}/>
                            <Tile title="Honda" image={tiles[9]}/>
                            <Tile title="Jaguar" image={tiles[10]}/>
                            <Tile title="Jeep" image={tiles[11]}/>
                            
                            <Tile title="Lamborgini" image={tiles[12]}/>
                            <Tile title="Land Rover" image={tiles[13]}/>
                            <Tile title="Lexus" image={tiles[14]}/>
                            <Tile title="Mercedes Benz" image={tiles[15]}/>
                            <Tile title="Mitsubishi Motors" image={tiles[16]}/>
                            <Tile title="Nissan" image={tiles[17]}/>

                            <Tile title="Rolls Royce" image={tiles[18]}/>
                            <Tile title="Porsche" image={tiles[19]}/>
                            <Tile title="Rolls Royce" />
                            <Tile title="Toyota"image={tiles[20]}/>
                            <Tile title="Volvo" image={tiles[21]}/>
                            <Tile title="Volks Wagan" image={tiles[22]}/>
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        );
    }
}

export default TilesList;
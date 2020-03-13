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
                                <Tile image={tiles[0]} />
                                <Tile image={tiles[1]} />
                                <Tile image={tiles[2]} />
                                <Tile image={tiles[3]} />
                                <Tile image={tiles[4]} />
                                <Tile image={tiles[5]} />

                                <Tile image={tiles[6]} />
                                <Tile image={tiles[7]} />
                                <Tile image={tiles[8]} />
                                <Tile image={tiles[9]} />
                                <Tile image={tiles[10]} />
                                <Tile image={tiles[11]} />

                                <Tile image={tiles[12]} />
                                <Tile image={tiles[13]} />
                                <Tile image={tiles[14]} />
                                <Tile image={tiles[15]} />
                                <Tile image={tiles[16]} />
                                <Tile image={tiles[17]} />

                                <Tile image={tiles[18]} />
                                <Tile image={tiles[19]} />
                                <Tile image={tiles[20]} />
                                <Tile image={tiles[21]} />
                                <Tile image={tiles[22]} />
                                <Tile image={tiles[23]} />


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TilesList;
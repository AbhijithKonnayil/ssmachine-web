import React, { Component } from 'react';
import '../css/tile-list.css'
import Tile from './Tile';
class TilesList extends Component {
    render() {
        return (
            <div class="brand-area bg-img-2 overlay">
            <div class="container-xl p-lg-0">
                <div class="row justify-content-end no-gutters">
                    <div class="col-12 col-sm-12 col-lg-12">
                        <div class="text-white mb-65 ml-80 ">
                            <h3>Brands we are Specialized in</h3>
                            <Tile title="Rolls Royce"/>
                            <Tile title="Bentley"/>
                            <Tile title="Aston Martin"/>
                            <Tile title="Mitsubishi Motors"/>
                            <Tile title="Ford"/>
                            <Tile title="Rolls Royce"/>

                            <Tile title="Dodge"/>
                            <Tile title="Chevrolet"/>
                            <Tile title="Nissan"/>
                            <Tile title="Honda"/>
                            <Tile title="GMC"/>
                            <Tile title="Ferrari"/>
                            

                            <Tile title="Jeep"/>
                            <Tile title="Porsche"/>
                            <Tile title="Lexus"/>
                            <Tile title="Mercedes Benz"/>
                            <Tile title="Volvo"/>
                            <Tile title="Toyota"/>


                            <Tile title="Lamborgini"/>
                            <Tile title="BMW"/>
                            <Tile title="Land Rover"/>
                            <Tile title="Volks Wagan"/>
                            <Tile title="Jaguar"/>
                            <Tile title="Audi"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        );
    }
}

export default TilesList;
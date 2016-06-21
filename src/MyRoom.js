'use strict';

const Population = require('./Population');

module.exports = class MyRoom {
    /**
     *
     * @param {Room} gameRoom
     */
    constructor(gameRoom) {
        this._gameRoom = gameRoom;
        this.population = new Population(this);
    }
};
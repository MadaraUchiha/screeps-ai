'use strict';

module.exports = class RoomHandler {

    constructor() {
        /**
         * @type {Map<string, MyRoom>}
         */
        this.rooms = new Map();
    }

    /**
     * @param {string} name
     * @param {MyRoom} room
     */
    set(name, room) {
        this.rooms.set(name, room);
    }

    /**
     * @param {string} name
     * @returns {MyRoom}
     */
    get(name) {
        return this.rooms.get(name);
    }

    size() {
        return this.rooms.size;
    }

};
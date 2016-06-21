'use strict';
const RoomHandler = require('./RoomHandler');
const MyRoom = require('./MyRoom');

const each = require('./utils').each;

module.exports = {
    loop() {
        const handler = new RoomHandler();
        for (const [name, room] of each(Game.rooms)) {
            handler.set(name, new MyRoom(room));
        }
    }
};
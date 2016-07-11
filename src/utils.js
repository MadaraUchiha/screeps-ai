module.exports = {
    /**
     *
     * @param obj
     * @returns {Function}
     */
    each: function*(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                yield [key, obj[key]];
            }
        }
    }
};
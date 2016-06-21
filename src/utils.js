module.exports = {
    /**
     *
     * @param obj
     * @returns {Function}
     */
    each(obj) {
        return function*() {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    yield [key, obj[key]];
                }
            }
        };
    }
};
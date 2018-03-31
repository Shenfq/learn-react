const CHANGE_EVENT = 'changed'

export default {
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },

    bind: function (cb) {
        if (!cb) return;
        this.on(CHANGE_EVENT, cb)
    },

    unbind: function (cb) {
        if (!cb) return;
        this.removeListener(CHANGE_EVENT, cb)
    }
}
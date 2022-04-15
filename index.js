const { Plugin } = require('powercord/entities');

module.exports = class NoDoubleBack extends Plugin {
    handleEvent(e) {
        if (e.button === 3 || e.button === 4) {
            e.preventDefault();
        }
    }

    startPlugin() {
        window.addEventListener('mouseup', this.handleEvent);
    }

    pluginWillUnload() {
        window.removeEventListener('mouseup', this.handleEvent);
    }
};

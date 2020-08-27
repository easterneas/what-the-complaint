const settings = require('../config/settings')

class SettingsHelper{
    static getSettings(){
        return settings
    }
}

module.exports = SettingsHelper
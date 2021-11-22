const assert = require('chai').assert;
const Prosperly = require('../dist/prosperly');

//Testing initialization of Prosperly

describe('Testing initialization of Prosperly', function(){

    describe('Initialization', function(){
        it('should evaluate to version', function(){
            let bot = new Prosperly({botToken: 'BOT TOKEN'});
            assert.equal(bot.version, "v1.0.1");
        });
    });
    //More tests to be added
});
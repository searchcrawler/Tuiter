
/*
 * Module dependencies
 */

var Tuiter = require('../')
  , keys = require('./keys.json')
  , methods = require('../lib/config.json').rest
  , should = require('should');

var t;

describe('rest', function(){

  before(function(done){
    t = new Tuiter(keys);
    done();
  });


  describe('#homeTimeline()', function(){
    it('should return latest tweets from logged in user timeline', function(done){
      t.homeTimeline({'include_rts' : false}, function(err, data){
        should.not.exist(err);
        should.exist(data);
        "object".should.equal(typeof data);
        done();
      });
    });
  });

  describe('#show()', function(){
    it('should return extended information about 209401805203976192 tweet', function(done){
      t.show({'id' :'213359699771392002' }, function(err, data){
        should.not.exist(err);
        data.should.be.ok;
        "object".should.equal(typeof data);
        done();
      });
    });
  });

  describe('#showUser()', function(){
    it('should return extended information about @dzajdband', function(done){
      t.showUser({'screen_name': 'dzajdband'}, function(err, data){
        should.not.exist(err);
        data.should.be.ok;
        "dzajdband".should.equal(data.screen_name);
        done();
      });
    });
  });

  describe('#retweets()', function(){
    it('should return latest retweets to 209401805203976192 tweet', function(done){
      t.retweets({'id' : '213359699771392002'}, function(err, data){
        should.not.exist(err);
        data.should.be.ok;
        "object".should.equal(typeof data);
        done();
      });
    });
  });

});

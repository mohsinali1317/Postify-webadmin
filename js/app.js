ENV = {FEATURES: {'query-params-new': true}};
var App = window.Cards = Ember.Application.create();
Cards.ApplicationAdapter = DS.FixtureAdapter.extend();
Cards.Store = DS.Store.extend();


Cards.Router.map(function ()
{
    this.resource('index', {path: '/'}, function ()
    {

    });

});


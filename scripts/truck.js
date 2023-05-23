(function(window) {
    "use strict";
    var App = window.App || {};

    function Truck(truckId, db) {
        console.log("Running function: Truck()");
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createReq = function(req) {
        console.log('Adding requests for ' + req.ign);
        this.db.add(req.ign, req);
    }
    Truck.prototype.processReq = function(ign) {
        console.log('Processing requests for ' + ign);
        this.db.remove(ign);
    }
    Truck.prototype.printReqs = function() {
        var reqArray = Object.keys(this.db.getAll());
        console.log('Truck #' + this.truckId + ' has pending requests:');
        reqArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this))
    }

    App.Truck = Truck;
    window.App = App;

})(window);
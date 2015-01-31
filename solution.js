{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        
        elevator.on("floor_button_pressed", function(floorNum) { 
            elevator.goToFloor(floorNum);
        });
        elevator.on("idle", function() {
            elevator.goToFloor(0);
        });
        for (var k = 0; k < floors.length; k++) {
            var floor = floors[k];
            floors[k].on("up_button_pressed down_button_pressed", function() {
                elevator.goToFloor(floor.floorNum());
            })
        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}


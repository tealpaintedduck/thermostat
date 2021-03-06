describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    console.log(thermostat.temperature)
  });

  describe('temperature', function() {
    it('starts at 20',function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('can be increased by 1', function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can be decreased by 1', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('can be reset back to 20', function() {
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });

    it('cannot be lower than 10', function() {
      while(thermostat.temperature > 10) {
        thermostat.decreaseTemperature();
      };
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('power save mode', function() {
    it('is on by default', function() {
      expect(thermostat.powerSavingMode).toBe(true)
    });

    it('can be turned off when on', function() {
      thermostat.powerSaveToggle()
      expect(thermostat.powerSavingMode).toBe(false)
    });

    it('can be turned on when off', function() {
      thermostat.powerSaveToggle()
      thermostat.powerSaveToggle()
      expect(thermostat.powerSavingMode).toBe(true)
    });

    it('has a maximum of 25', function() {
      while(thermostat.temperature < 25) {
        thermostat.increaseTemperature();
      };
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(25);
    });
  });
});



// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });


//   it('', function(){

//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });

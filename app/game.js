define('app/game', [
    'underscore',
    'userInput',
    'utils'
], function (
    _,
    userInput,
    utils
) {    
    
    let gameObjects = [];
    var game = {}


    class GameObject {
        constructor(config) {
            this.game = config.game;
            this.hitbox = config.hitbox;
            this.color = config.color || "#444444";
        }
        tick() {
            //Will take approx 2783 to cross screen once
            this.hitbox.x = (this.hitbox.x > canvas.width) ? 0 : this.hitbox.x + 1;
        }
        draw() {
            context.fillStyle = this.color;
            context.fillRect(this.hitbox.x, this.hitbox.y, this.hitbox.width, this.hitbox.height);
        }
    }

    class Timer {
        constructor() {
            this.start = new Date();
            this.amount = 0;
        }
        tick() {
            this.amount = new Date().getTime() - this.start.getTime();
        }
        draw() {
            context.fillStyle = "black";
            context.fillText(Math.floor(this.amount/1000),100,100);
        }
    }

    class DeltaTimer {
        constructor() {
            this.amount = 0;
        }
        tick(delta) {
            this.amount += delta;
        }
        draw() {
            context.fillStyle = "black";
            context.fillText(Math.floor(this.amount/1000),100,150);
        }
    }

    const delta = 1.0/144;

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    return {
        init: function() {
            context.font = "20px Georgia";

            gameObjects.push(new GameObject({
                hitbox: {
                    x: 0,
                    y: 0,
                    width: 10,
                    height: 10
                }
            }));

            gameObjects.push(new Timer());

            gameObjects.push(new DeltaTimer());
        },
        tick: function() {
            _.each(gameObjects, function(gameObject) {
                gameObject.tick();
            });

            context.fillStyle = "white";
            context.fillRect(0,0,canvas.width, canvas.height);
            
            _.each(gameObjects, function(gameObject) {
                gameObject.draw();
            });
        }
    }
});
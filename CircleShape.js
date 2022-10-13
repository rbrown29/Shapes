CircleShape.prototype = new Shape({});
function CircleShape(properties) {

    var mProperties = properties;
    var mSuper = new Shape(properties);


    this.draw = function(context, width, height) {
        mSuper.draw(context, width, height);

        var x = this.scale(mProperties.x, width);
        var y = this.scale(mProperties.y, height);
        var xr = this.scale(mProperties.radius, width);
        var yr = this.scale(mProperties.radius, height);

        context.beginPath();
        context.ellipse(x, y, xr, yr, 0, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();

        if(mProperties.outline !== undefined) {
            context.stroke();
        }
    }
}
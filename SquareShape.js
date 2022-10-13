SquareShape.prototype = new RectangleShape({});

SquareShape.prototype.draw = function(context, width, height) {
    this.super.draw(context, width, height);
}

function SquareShape(properties) {
    properties.width = properties.size;
    properties.height = properties.size;
    this.super = new RectangleShape(properties);
}
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape : "circle",
    radius: number
}

type Rectangle ={
    shape: "rectangle",
    width: number,
    height: number
}

type ShapeArea = Circle | Rectangle;

const calculateShapeArea = (area: ShapeArea) =>{
    if( area.shape === 'circle'){
        return Math.PI * area.radius * area.radius
    }
    else if(area.shape === 'rectangle'){
        return area.height * area.width
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);
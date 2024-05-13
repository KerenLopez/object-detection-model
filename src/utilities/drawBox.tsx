// Especifica los tipos de los parámetros y los objetos dentro del array 'detections'
export const drawRect = (detections: { bbox: [number, number, number, number]; class: string }[], ctx: CanvasRenderingContext2D) => {
  // Loop through each prediction
  detections.forEach(prediction => {

    // Extract boxes and classes
    const [x, y, width, height] = prediction.bbox;
    const text = prediction.class;

    // Set styling
    const color = Math.floor(Math.random()*16777215).toString(16);
    ctx.strokeStyle = '#' + color
    ctx.font = '18px Arial';

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillStyle = '#' + color
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
}

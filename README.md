This project is a browser version of something between a sketchpad and an Etch-A-Sketch.
It should help refresh my CSS skills, mostly flexbox, and sharpen my JS skills in making webpage elements interactive.

Checkout line 35 of the js code where you pass a function reference inside an event listener. The action never worked as intended when the function had parantheses, but works fine without them. I've learned that when you pass a function reference without parentheses, you are passing the function itself as an argument. This means that the function is not executed immediately; instead, it is passed as a reference, which can be invoked later. This approach is typically used in event listeners to ensure that the function is called only when the event occurs. 

On the other hand, when you pass a function reference with parentheses, you are invoking the function immediately and passing its return value. This means the function is executed at the point where the event listener is set up, and whatever value the function returns is passed as the argument. This is usually not desirable for event listeners because it does not defer the function execution until the event occurs.



// Wrap a mapFunc that takes a list of items, iterates over them, calls a promise returning function on each one, then returns a promise that resolves when all the individual promises have resolved, and returns the result of that promise-function in the same order the items appeared in
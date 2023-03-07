# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I chose a basic refactor, starting by removing the nested `if` checks for event and `partitionKey` property. Added a function to generate a hash from the event object, this way it was possible to remove the nested check for candidate also. This new function could be refactored also to take into account if the event is a string, this way the reuse of the same pattern to generate a hash on line 22 could be avoid. By simply removing the nested `if` increases readability for the code, as it makes it clearer to understand the purpose of the function.

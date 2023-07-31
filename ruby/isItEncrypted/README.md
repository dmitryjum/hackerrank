We're working at a spy agency and our enemies have developed an unbreakable decoder ring that uses 1:1 ampping from character to character.
For example, A might always be encoded as J, J might always be encoded as L and so on. We have some guesses at translations for a few words,
but first we need to make sure they're possible. For example, APPLE might have been encoded as ABBCD, but it couldn't have been encoded as ABCDE,
since that woudl mean P would have multiple encodings. Write a method that accepts two strings, returns true if the first string could be encoded as the second and returns false otherwise.

APPLE -> ABBCD = true
APPLE -> ABCDE = false
### ignore non-alphabetical characters
#### input: Pig!
#### output Pig!

### add "ay" to words beginning with a vowel
#### input: "I love pizza!"
#### output "Iay love pizza!"

### for words beginning with one consonant, move the consonant to the end and add "ay"
#### input "I love pizza!"
#### output: "Iay love pizza!"

### for words beginning with more than one consonant, move all the first consecutive consonants to the end and add "ay"
#### input: "Spout"
#### output: "outspay"

### if the first consonants include "qu" move the "u" along with the "qu"
#### input: "squeal"
#### output: "ealsquay"

### correct capitlization issues
#### input: "Squeal"
#### output: "ealSquay"

### make multiple word sentences appear in pig latin.
#### input: "I love pizza! It makes me squeal!"
#### output: "Iay ovelay izzapay! Itay akesmay emay ealsquay"
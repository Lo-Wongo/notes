

You're on a website (such as Github!) with a text field which autocompletes usernames as you type. 
Under the hood, there's an API call which takes in the prefix of a username and then returns all usernames which start with that prefix, 
lexicographically sorted and truncated at 5 results.

Your task is to use this API call to dump the entire user database, specifically:

Implement the `extract` function in `autocomplete.py`. 
`extract` should return the whole user database, making calls to `query` under the hood.

Notes:

- You can assume all valid usernames are comprised of lowercase ASCII letters (a-z).
- Assume that queries to the API are expensive and should be minimized, but it's more important to have a correct answer and well-structured solution than an optimal answer.
- You are welcome to include any tests or documentation that you'd normally provide when checking in to a shared codebase.









def extract(query):
    """extract takes in a `query` API function (which returns the first 5 usernames, lexicographically sorted,
    that start with a prefix) and returns the sorted list of all usernames in the database.

    For example, the `query` function in provided in `main` works as follows:
    
    query("a") #=> ["abracadara", "al", "alice", "alicia", "allen"]
    query("ab") #=> ["abracadara"]

    The following implementation would pass the assertion in `main`, but is not a correct solution since it
    works only for that example `query`:

    def extract(query):
        return query("ab") + query("al") + query("altercation") + query("b") + query("el") + query("ev") + query("m")

    Your goal is to write an `extract` method that is correct for any provided `query`.
    """
    # YOUR CODE HERE
    return [...]

    def extract(query):
   retlist = []
   for word in database:
       if word[0:len(query)] == query:
           retlist.append(word)
       if len(retlist) >= 5:
           break
   return retlist

def main():
   """Run solution"""
   # Sample implementation of the autocomplete API
   sorted(database)   #sorting it would improve the complexity

   print(extract("b"))


#database needs to be global to be accessible
database = ["abracadara", "al", "alice", "alicia", "allen", "alter", "altercation", "bob", "element", "ello", "eve", "evening", "event", "eventually", "mallory"]
main()


# the above is the answer
     

def main():
    """Runs your solution -- no need to update (except to maybe try out different databases)."""
    # Sample implementation of the autocomplete API
    database = ["abracadara", "al", "alice", "alicia", "allen", "alter", "altercation", "bob", "element", "ello", "eve", "evening", "event", "eventually", "mallory"]
    query = lambda prefix: [d for d in database if d.startswith(prefix)][:5]
    assert extract(query) == database

main()
"""
Problem: Write a function that will return the longest contiguous substring of the input string that is a palindrome.
Input: String
Output: String
Palindrome definition: reads the same backwards and forwards

Examples:
racecar -> racecar
abacabde -> bacab
"""

def get_longest_palindrome(string):
    
    # Iterate over all substrings
    for window_size in xrange(len(string) + 1, 0, -1):
        
        current = 0
        while current + window_size < len(string) + 1:
            substring = string[current:current+window_size]
            
            # If substring is palindrome return it
            if substring == substring[::-1]:
                return substring
                
            current += 1
    
    return ''
    
    
print get_longest_palindrome('racecar')
print get_longest_palindrome('abacabde')
print get_longest_palindrome('t')
print get_longest_palindrome('')

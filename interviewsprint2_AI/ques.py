# problem no4
def is_palindrome_number(number):
   
    number_str = str(number)
    
    
    if number_str == number_str[::-1]:
        return True
    else:
        return False
  
   
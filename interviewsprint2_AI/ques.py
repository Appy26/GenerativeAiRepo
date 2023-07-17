# problem no4
def is_palindrome_number(number):
   
    number_str = str(number)
    
    
    if number_str == number_str[::-1]:
        return True
    else:
        return False
  
print(is_palindrome_number(5005))
  #problem no 5

def average_age_(company):
    count = 0
    total_age = 0

    for employee_details in company['employees'].values():
        job_title = employee_details.get('job_title', '')
        if job_title.startswith('S'):
            count += 1
            total_age += employee_details.get('age', 0)

    if count > 0:
        average_age = total_age / count
        return average_age
    else:
        return 0


company = {
    'employees': {
        'John': {'age': 35, 'job_title': 'Manager'},
        'Emma': {'age': 28, 'job_title': 'Software Engineer'},
        'Kelly': {'age': 41, 'job_title': 'Senior Developer'},
        'Sam': {'age': 30, 'job_title': 'Software Engineer'},
        'Mark': {'age': 37, 'job_title': 'Senior Manager'},
        'Sara': {'age': 32, 'job_title': 'Software Engineer'},
    }
}

print(average_age_(company))  

   
'''user_input=input("enter anything")
palindrome_string=user_input[::-1]
print("palindrom string: ",palindrome_string)'''

employees=[
    {"name":"john","salary":3000,"designation":"Developer"},
     {"name":"emma","salary":4000,"designation":"Manager"},
      {"name":"Kelly","salary":3500,"designation":"tester"}

]


if(employees[0]["salary"]>employees[1]["salary"]and employees[1]["salary"]>employees[2]["salary"] ):
     print(employees[0])
 
elif(employees[1]["salary"]>employees[0]["salary"]and employees[1]["salary"]>employees[2]["salary"]):
       print(employees[1])

else :
        print(employees[2])
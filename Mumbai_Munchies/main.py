snacks = {}
# add the item in the menu
def add() :
    id = input("Enter ID: ")
    name = input("Enter name: ")
    price = input("Enter Price: ")
    availability = input(f"Enter available {name}s: ")
    snacks[id] = {
        "name":name,
        "price":int(price),
        "availability":int(availability),
        "sales":0
    }
    return operation()

#update the item in the menu
def update() :
   
    print("Enter item ID to update the availability of a item in a menu")
    userInput = input("Enter snack id :")
    if userInput in snacks :
        availability = input("Enter updated stock: ")
        snacks[userInput]["availability"] = int(availability)
        print(f"{snacks[userInput]['name']}'s menu has been updated!")
        return operation()
    else :
        print("Invalid snack ID")
        return update()

#remove the item in the menu
def remove() :
    userInput = input("Enter item ID: ")
    if userInput in snacks :
        print(f"{snacks[userInput]['name']} has been removed!")
        del snacks[userInput]
        return operation()
    else :
        print("Invalid snack ID")
        return remove()


#record the item in the menu
def record():
    print("Enter item ID to record Sale")
    userInput = input("Enter item ID :")
    if(userInput not in snacks) :
        print("Invalid snack ID")
        return record()
    sale = input("Enter quantity: ")
    if int(snacks[userInput]["availability"]) < int(sale) :
        print(f"Only {snacks[userInput]['availability']} pcs of {snacks[userInput]['name']} is available")
        return record()
    snacks[userInput]["availability"] -= int(sale)
    snacks[userInput]["sales"] += int(sale)
    print("order has been recorded")
    return operation()



def operation() :
    print("1. Add item")
    print("2. Remove item from Inventory")
    print("3. Update menu")
    print("4. order Record")
    print("5. Exit")
    userInput = input("Choose an option: ")

    if userInput == "1" :
        add()
    elif userInput == "2" :
        remove()
    elif userInput == "3" :
        update()
    elif userInput == "4":
        record()
    elif userInput == "5" :
        return
    else :
        print("Please enter valid input")


operation()
print(snacks)
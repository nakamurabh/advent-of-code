# Advent of code Year 2020 Day 5 solution
# Author = ?
# Date = December 2020
if __name__ == '__main__':
    with open((__file__.rstrip("code.py")+"input.txt"), 'r') as input_file:
        content = input_file.readlines()

    seats = []
    for line in content:
        row = line[0:7]
        column = line[7:10]
        seats.append((row, column))

    largest = 0
    smallest = 9999
    ids = []
    for seat in seats:
        row_number = seat[0].replace('F', '0').replace('B', '1')
        column_number = seat[1].replace('R', '1').replace('L', '0')
        r = int(row_number, 2)
        c = int(column_number, 2)
        id = r * 8 + c
        print(seat[0]+seat[1], row_number, column_number, r, c, id)
        if id > largest:
            largest = id
        if id < smallest:
            smallest = id
        ids.append(id)
    print(smallest, largest)

    for i in range(smallest, largest):
        if i not in ids:
            print(i)

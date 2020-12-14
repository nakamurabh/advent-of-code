import datetime

# Advent of code Year 2020 Day 10 solution
# Author = ?
# Date = December 2020


def validate(arr, start_from=0, debug=False):
    diffs = []
    for i in range(start_from, len(arr)):
        n = arr[i]
        prev = arr[i-1] if i - 1 >= 0 else 0
        diff = n - prev
        diffs.append(diff)
        if diff > 3:
            raise ValueError(f'Diff greater than 3 - {n} {prev}')
    diffs.append(3)

    if debug:
        print(arr)
        print(diffs)
        print(f'count 1 - {len([d for d in diffs if d == 1])}')
        print(f'count 2 - {len([d for d in diffs if d == 2])}')
        print(f'count 3 - {len([d for d in diffs if d == 3])}')
        print(f'max jolt - {numbers[-1] + 3}')

    return 1


def recursive(arr, start=0):
    count = 1
    for i in range(start, len(arr) - 1):
        new_arr = arr[:i] + arr[i+1:]
        try:
            validate(new_arr, i)
        except ValueError:
            pass
        else:
            count += recursive(new_arr, i)
    # print(count)
    return count


if __name__ == '__main__':
    with open((__file__.rstrip("code.py")+"input.txt"), 'r') as f:
        content = f.readlines()
    numbers = []
    for line in content:
        numbers.append(int(line.replace('\n', '')))

    numbers.sort()

    validate(numbers, 0, True)

    now = datetime.datetime.now()
    x = recursive(numbers)

    print(x)
    print(datetime.datetime.now()-now)

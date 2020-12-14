# Advent of code Year 2020 Day 9 solution
# Author = ?
# Date = December 2020

if __name__ == '__main__':
    with open((__file__.rstrip("code.py")+"input.txt"), 'r') as f:
        content = f.readlines()

    numbers = []
    for line in content:
        numbers.append(int(line.replace('\n', '')))

    def has_two_sum(s, total):
        for x in s:
            for y in s:
                if x != y and (x + y) == total:
                    return True
        return False

    def find_first(numbers, preamble=5):
        anchor = 0
        for n in numbers[preamble:]:
            prev_set = numbers[anchor:anchor + preamble]
            print(f'{anchor}: {n} - {prev_set}')
            if not has_two_sum(prev_set, n):
                print(f'\t !!!! not found for {n}')
                return n, prev_set
            anchor += 1
        return

    n, prev = find_first(numbers, 25)

    def find_sum(n, arr):
        import math
        _min = math.inf
        _max = 0
        _sum = 0
        for start_from in range(len(arr)):
            _min = math.inf
            _max = 0
            _sum = 0
            for a in arr[start_from:]:
                _sum += a
                _min = min(_min, a)
                _max = max(_max, a)
                if _sum == n:
                    print(_min, _max,  _min + _max)
                    return _min, _max
                if _sum > n:
                    continue

    find_sum(n, numbers)

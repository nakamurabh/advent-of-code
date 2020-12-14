import pprint

# Advent of code Year 2020 Day 7 solution
# Author = ?
# Date = December 2020

class Bag():
    def __init__(self, variant, color):
        self.variant = variant
        self.color = color
        self.contains = []
        self.parents = []
        self.marked = False

    def insert(self, qnty, bag):
        bag.parents.append(self)
        self.contains.append((qnty, bag))

    def mark_parents(self):  # part-1
        count = 1
        for p in self.parents:
            if not p.marked:
                p.marked = True
                c = p.mark_parents()
                count = count + c
        return count

    def count_inner_bags(self):  # part-2
        count = 1
        for q, inner_bag in self.contains:
            count = count + (int(q) * inner_bag.count_inner_bags())
        return count

    def __repr__(self):
        s = len(self.contains)
        p = len(self.parents)
        return f'<Bag contains-size={s} parent="{p}" marked="{self.marked}">'


if __name__ == '__main__':
    with open((__file__.rstrip("code.py")+"input.txt"), 'r') as f:
        content = f.readlines()

    # lexic parse
    delimiters = [' ', ',']
    arr_lex = [[]]
    arr = ['', 'bags', 'bag', 'contain', 'no', 'other']
    for line in content:
        lex = ''
        for c in line:
            if c == '\n':
                arr_lex.append([])
            elif c in delimiters:
                # ignore non essential lex
                if lex not in arr:
                    arr_lex[-1].append(lex)
                lex = ''
            else:
                lex = lex + c

    bags = {}

    def get_or_new(val, col):
        k = f'{val}-{col}'
        if bags.get(k) is None:
            bags[k] = Bag(val, col)
        return bags.get(k)

    # build graph
    for rule in arr_lex:
        v, c = rule[0:2]
        b = get_or_new(v, c)
        if len(rule) > 2:
            # possible array sizes 2, 5, 8, 11, ...
            qnty_inner_bags = int(len(rule[2:]) / 3)
            for i in range(1, qnty_inner_bags + 1):
                anchor = i * 3
                q, vi, ci = rule[anchor - 1:anchor + 2]
                inner_bag = get_or_new(vi, ci)
                b.insert(q, inner_bag)
    # pprint.pprint(bags)

    sg_bag = get_or_new('shiny', 'gold')
    print(sg_bag.count_inner_bags() - 1)
    # sg_bag.mark_parents()

    # bags_marked = [b for k, b in bags.items() if b.marked]
    # print(len(bags_marked))
    # pprint.pprint(bags)

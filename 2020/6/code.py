# Advent of code Year 2020 Day 6 solution
# Author = ?
# Date = December 2020


class Group():
    def __init__(self):
        self.person_answers = []

    def addPA(self, pa):
        self.person_answers.append(pa)

    def unique_answers(self):
        all_answers = []
        for pa in self.person_answers:
            for a in pa.answers:
                all_answers.append(a)
        return list(dict.fromkeys(all_answers))

    def count_unique(self):
        return len(self.unique_answers())

    def same_answer(self):
        temp_arr = set(self.person_answers[0].answers)
        for pa in self.person_answers:
            temp_arr = temp_arr.intersection(pa.answers)
        return temp_arr

    def count_same_answer(self):
        return len(self.same_answer())

    def __repr__(self):
        return '<Group pa=' + str([pa for pa in self.person_answers]) + '>'


class PersonAnswer():
    def __init__(self, answers):
        self.answers = [a for a in answers]
        self.answers.sort()

    def __repr__(self):
        return str(self.answers)


if __name__ == '__main__':
    with open((__file__.rstrip("code.py")+"input.txt"), 'r') as f:
        content = f.readlines()

    groups = [Group()]
    for line in content:
        if line == '\n':
            groups.append(Group())
        else:
            groups[-1].addPA(PersonAnswer(line.replace('\n', '')))

    unique = 0
    same_answer = 0
    for g in groups:
        same_answer += g.count_same_answer()  # part-2
        unique += g.count_unique()  # part-1
    print(unique, same_answer)

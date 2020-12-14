import time
# Advent of code Year 2020 Day 8 solution
# Author = ?
# Date = December 2020


class Program():
    def __init__(self):
        self.cmds = []
        self.acc = 0
        self.line = 0

    def add(self, cmd):
        cmd.program = self
        self.cmds.append(cmd)

    def reset(self):
        self.line = 0
        self.acc = 0
        for c in self.cmds:
            c.executed = False

    def exec(self):
        result = f'----- L: {self.line}\tACC: {self.acc} -----'
        try:
            if not self.cmds[self.line].executed:
                return self.cmds[self.line].exec()
        except IndexError:
            result = f'!!!!! DONE L: {self.line}\tACC: {self.acc} !!!!!'
        return result

class Cmd():
    def __init__(self, cmd, value):
        self.cmd = cmd
        self.value = int(value)
        self.executed = False
        self.program = None

    def exec(self):
        if self.cmd == 'acc':
            self.program.acc += self.value
            self.program.line += 1
        elif self.cmd == 'jmp':
            self.program.line += self.value
        else:
            self.program.line = self.program.line + 1
        self.executed = True
        return self.program.exec()

    def __repr__(self):
        ex = '*' if self.executed else '-'
        return f'{self.cmd}\t{self.value}\t{ex}'


if __name__ == '__main__':
    with open((__file__.rstrip("code.py")+"input.txt"), 'r') as f:
        content = f.readlines()

    # parser
    arr_tokens = [[]]
    for line in content:
        lex = ''
        for c in line:
            if c == '\n':
                arr_tokens[-1].append(lex)
                arr_tokens.append([])
            elif c == ' ':
                arr_tokens[-1].append(lex)
                lex = ''
            else:
                lex = lex + c
    arr_tokens[-1].append(lex)  # added last token

    program = Program()

    for t in arr_tokens:
        cmd = Cmd(t[0], t[1])
        program.add(cmd)

    anchor = 1
    bkp_cmd = None
    result = ''
    while 'DONE' not in result:  # coment while to run part-1
        program.reset()
        print(f'!!! replacing {program.cmds[anchor]} with nop')
        bkp_cmd = program.cmds[anchor].cmd
        program.cmds[anchor].cmd = 'nop'
        result = program.exec()
        program.cmds[anchor].cmd = bkp_cmd
        anchor += 1
    print(result)

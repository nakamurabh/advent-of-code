import re

# Advent of code Year 2020 Day 4 solution
# Author = ?
# Date = December 2020

def validate_byr(value):
    return 1920 <= int(value) < 2002


def validate_iyr(value):
    return 2010 <= int(value) <= 2020


def validate_eyr(value):
    return 2020 <= int(value) <= 2030


def validate_hgt(value):
    return re.search(
        "^1(([5-8][0-9])|(9[0-3]))cm|^(59|6[0-9]|7[0-6])in",
        value
    )


def validate_hcl(value):
    return re.search('#([0-9]|[a-f]){6}', value),


def validate_ecl(value):
    return value in ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']


def validate_pid(value):
    return re.search('^[0-9]{9}$', value)


if __name__ == '__main__':
    validations = {
        'byr': validate_byr,
        'iyr': validate_iyr,
        'eyr': validate_eyr,
        'hgt': validate_hgt,
        'hcl': validate_hcl,
        'ecl': validate_ecl,
        'pid': validate_pid
    }

    with open((__file__.rstrip("code.py")+"input.txt"), 'r') as input_file:
        content = input_file.readlines()

    passports = ['']

    for line in content:
        if line == '\n':
            passports.append('')
        else:
            passports[-1] = passports[-1] + line.replace('\n', ' ')

    ps = []
    for passport in passports:
        key_values = passport.strip().split(' ')
        p = {}
        for key_value in key_values:
            key, value = key_value.split(':')
            p[key] = value

        valid = [
            p.get(param) and validate(p.get(param))
            for param, validate in validations.items()
        ]
        p['_valid_arr'] = valid
        p['_is_valid'] = all(valid)
        ps.append(p)

    print(len([p for p in ps if p['_is_valid']]))

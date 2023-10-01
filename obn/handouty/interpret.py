"""3D Esoteric Language Interpreter

"""
import cPickle, sys, random

__version__ = (1, 0, 1)

def Interpret(data):
    #interpret data
    Direction = (0, 0, 1)
    X = Y = Z = 0
    Ended = 0
    Stack = []
    VarINT = []
    VarSTR = ['?']
    Debug = 0
    ProcessStack = 0
    while Ended == 0:
        cell = data[Z][Y][X].upper()
        if Debug == 1: print "Test:", X, Y, Z
        if cell == 'END':
            Ended = 1
            break
        elif cell == 'RIGHT':
            Direction = (0, 0, 1)
        elif cell == 'LEFT':
            Direction = (0, 0, -1)
        elif cell == 'UP':
            Direction = (0, -1, 0)
        elif cell == 'DOWN':
            Direction = (0, 1, 0)
        elif cell == 'NEXT':
            Direction = (1, 0, 0)
        elif cell == 'PREV':
            Direction = (-1, 0, 0)
        elif cell == 'JUMP':
            X = X + Direction[2]
            Y = Y + Direction[1]
            Z = Z + Direction[0]
        elif cell == 'DBLJMP':
            X = X + Direction[2]*2
            Y = Y + Direction[1]*2
            Z = Z + Direction[0]*2
        elif cell == 'IFRND':
            if random.randint(0, 1):
                X = X + Direction[2]
                Y = Y + Direction[1]
                Z = Z + Direction[0]
        elif cell == 'IFEQU':
            while len(VarINT) < 2:
                VarINT.append('0')
            if int(VarINT[0]) != int(VarINT[1]):
                X = X + Direction[2]
                Y = Y + Direction[1]
                Z = Z + Direction[0]
        elif cell == 'STREQU':
            while len(VarSTR) < 2:
                VarSTR.append('')
            if VarSTR[0] != VarSTR[1]:
                X = X + Direction[2]
                Y = Y + Direction[1]
                Z = Z + Direction[0]
        elif cell == 'IFLAR':
            while len(VarINT) < 2:
                VarINT.append('0')
            if int(VarINT[0]) <= int(VarINT[1]):
                X = X + Direction[2]
                Y = Y + Direction[1]
                Z = Z + Direction[0]
        elif cell == 'RNDDIR':
            R = random.randint(0, 5)
            if R / 2 == 0:
                Direction = (-1, 0, 0) if R % 2 else (1, 0, 0)
            elif R / 2 == 1:
                Direction = (0, -1, 0) if R % 2 else (0, 1, 0)
            else:
                Direction = (0, 0, -1) if R % 2 else (0, 0, 1)
        elif cell == 'OUTPUT' or cell == 'ADD' or cell == 'SUB' or cell == 'MUL' \
             or cell == 'DIV' or cell == 'NOT' or cell == 'SWAP': #COMMANDS
            #if Stack == []:
            #    Stack = [cell]
            #else:
            #    pass #ERROR! But ignore it.
            Stack.append(cell) #complex functions
        elif cell == 'INT' or cell == 'STR':
            Stack.append(cell)
        elif cell == 'YNPRMT':
            if len(VarSTR) == 0:
                VarSTR.append('')
            Xs = raw_input(VarSTR[0])
            if not (Xs.upper() == 'YES' or Xs.upper() == 'Y'):
                X = X + Direction[2]
                Y = Y + Direction[1]
                Z = Z + Direction[0]
        elif cell == 'SPRMT':
            while len(VarSTR) < 2:
                VarSTR.append('')
            VarSTR[1] = raw_input(VarSTR[0])
        elif cell == '"' + cell[1:]:
            #String, process stack
            Stack.append(data[Z][Y][X]) #It seems not neccesary, but else all strings are UPPER CASE
            ProcessStack=1
        else:
##            try:
##                V = int(cell)
##            except ValueError:
##                pass #comment, do nothing
##            else:
            if cell.isdigit():
                #Integer, process stack
                Stack.append(cell)
                ProcessStack=1

        #print Stack,
        if ProcessStack:
            lenStack = -1 #len(Stack)
            while lenStack != len(Stack):
                lenStack = len(Stack)
                if len(Stack) < 2: break #for commands shorter than 2 items, we wouldn't need this stack, would we?
                T = Stack[-2]
                #print X, Y, Z,
                if Stack[-1][0] == '"':
                    if T == 'OUTPUT':
                        print Stack[-1][1:]
                        Stack = Stack[:-2]
                    elif T[:3] == 'STR' and len(T) > 3:
                        while len(VarSTR) <= int(T[3:]):
                            VarSTR.append('')
                        VarSTR[int(T[3:])] = Stack[-1][1:]
                        Stack = Stack[:-2]
                    elif T == 'INT':
                        Stack = Stack[:-2] + [Stack[-1][1:]]
                elif Stack[-1][:3] == 'STR':
                    if T == 'OUTPUT':
                        while len(VarSTR) <= int(Stack[-1][3:]):
                            VarSTR.append('')
                        print VarSTR[int(Stack[-1][3:])]
                        Stack = Stack[:-2]
                elif Stack[-1].isdigit():
                    if T == 'OUTPUT':
                        print Stack[-1]
                        Stack = Stack[:-2]
                    elif T == 'INT' or T == 'STR':
                        Stack = Stack[:-2] + [T + Stack[-1]]
                    elif T[:3] == 'INT':
                        while len(VarINT) <= int(T[3:]):
                            VarINT.append('0')
                        VarINT[int(T[3:])] = Stack[-1]
                        Stack = Stack[:-2]
                    elif T.isdigit():
                        while len(VarINT) <= int(T):
                            VarINT.append('0')
                        if len(Stack) > 2:
                            if Stack[-3] == 'ADD':
                                VarINT[int(T)] = str(int(VarINT[int(T)]) + int(Stack[-1]))
                                Stack = Stack[:-3]
                            elif Stack[-3] == 'SUB':
                                VarINT[int(T)] = str(int(VarINT[int(T)]) - int(Stack[-1]))
                                Stack = Stack[:-3]
                            elif Stack[-3] == 'MUL':
                                VarINT[int(T)] = str(int(VarINT[int(T)]) * int(Stack[-1]))
                                Stack = Stack[:-3]
                            elif Stack[-3] == 'DIV':
                                VarINT[int(T)] = str(int(VarINT[int(T)]) / int(Stack[-1]))
                                Stack = Stack[:-3]
                    elif T == 'NOT':
                        VarINT[int(Stack[-1])] = '0' if int(VarINT[int(Stack[-1])]) else '1'
                        Stack = Stack[:-2]
                    elif len(Stack) > 3 and Stack[-4] == 'SWAP':
                        if Stack[-3] == 'INT':
                            X = VarINT[int(Stack[-2])]
                            VarINT[int(Stack[-2])] = VarINT[int(Stack[-1])]
                            VarINT[int(Stack[-1])] = X
                        else:
                            X = VarSTR[int(Stack[-2])]
                            VarSTR[int(Stack[-2])] = VarSTR[int(Stack[-1])]
                            VarSTR[int(Stack[-1])] = X
                        Stack = Stack[:-4]
                elif Stack[-1][3:].isdigit():
                    #print '|',
                    if (T == 'INT' or T == 'STR' or T == 'NOT') and Stack[-1][:3] == 'INT':
                        while len(VarINT) <= int(Stack[-1][3:]):
                            VarINT.append('0')
                        Stack = Stack[:-2] + [T + VarINT(int(Stack[-1][3:]))]
                    elif T[:3] == 'INT':
                        while len(VarINT) <= int(T[3:]):
                            VarINT.append('0')
                        if Stack[-1][:3] == 'INT':
                            if Stack[-3] == 'ADD':
                                VarINT[int(T[3:])] = str(int(VarINT[int(T[3:])]) + int(VarINT[int(Stack[-1][3:])]))
                                Stack = Stack[:-3]
                            if Stack[-3] == 'SUB':
                                VarINT[int(T[3:])] = str(int(VarINT[int(T[3:])]) - int(VarINT[int(Stack[-1][3:])]))
                                Stack = Stack[:-3]
                            if Stack[-3] == 'MUL':
                                VarINT[int(T[3:])] = str(int(VarINT[int(T[3:])]) * int(VarINT[int(Stack[-1][3:])]))
                                Stack = Stack[:-3]
                            if Stack[-3] == 'DIV':
                                VarINT[int(T[3:])] = str(int(VarINT[int(T[3:])]) / int(VarINT[int(Stack[-1][3:])]))
                                Stack = Stack[:-3]
                    elif T == 'OUTPUT':
                        while len(VarINT) <= int(Stack[-1][3:]):
                            VarINT.append('0')
                        print VarINT[int(Stack[-1][3:])]
                        #print VarINT, "huh"
                        Stack = Stack[:-2]
        ProcessStack = 0
        #print Stack
        X += Direction[2]
        if X >= len(data[0][0]):
            X %= len(data[0][0])
        elif X < 0:
            X += len(data[0][0])
        Y += Direction[1]
        if Y >= len(data[0]):
            Y %= len(data[0])
        elif Y < 0:
            Y += len(data[0])
        Z += Direction[0]
        if Z >= len(data):
            Z %= len(data)
        elif Z < 0:
            Z += len(data)
            
##        if X + Direction[2] => len(data[0][0]):
##            X = X + Direction[2] % len(data[0][0])
##        elif X + Direction[2] < 0:
##            X = X + Direction[2] + len(data[0][0])
##        else:
##            X = X + Direction[2]
##        if Y + Direction[1] > len(data[0]):
##            Y = 0
##        elif Y + Direction[1] < 0:
##            Y = len(data[0])
##        else:
##            Y = Y + Direction[1]
##        if Z + Direction[0] > len(data):
##            Z = 0
##        elif Z + Direction[0] < 0:
##            Z = len(data)
##        else:
##            Z = Z + Direction[0]

if __name__ == '__main__':
    if len(sys.argv) > 1:
        f = open(sys.argv[1], 'r')
    else:
        f = open('3D.pkl', 'r')
    Interpret(cPickle.load(f)) ##Assume Pickle
    f.close()

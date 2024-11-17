class Node:
    def __init__(self,item,next):
        self.item = item
        self.next = next


class Queue:
    def __init__(self):
        self.front = None
        self.last = None

    def pop(self):
        if not self.front:
            return False
        node = self.front
        self.front = self.front.next
        return node.item

    def push(self,value):
        if not self.front:
            self.front = self.last = Node(value, None)
            return
        node = self.last
        node.next = Node(value, None)
        self.last = node.next
    def only_one(self):
        return not self.front.next

class Solution:
    def last_card(self,N):
        if N>500000 or N<1:
            return False
        queue = Queue()
        for i in range(1, N+1):
            queue.push(i)
        while not queue.only_one():
            queue.pop()
            if queue.only_one():
                break
            temp = queue.pop()
            queue.push(temp)
        return queue.pop()

sol = Solution()
n=input()
print(sol.last_card(int(n)))


class Graph :
    def __init__(self):
        self.vertices = {}
        
    def add_node(self, node) :
        self.vertices[node] =  set()
        return self
    
    def add_edge(self, n1, n2) :
        if n1 in self.vertices and n2 in self.vertices:
            self.vertices[n1].add((n2))
            # self.vertices[n2].add(n1)
        return self
    
    def dynamic_add_edge(self, arr) :
        for n1, n2 in arr:
            self.add_edge(n1, n2)
    
    def dfs_recursive(self,starting_vertex, destination_vertex, visited_set=set(), path=[]) :
            
        visited_set.add(starting_vertex)
        
        path = path + [starting_vertex]
        
        if starting_vertex == destination_vertex:
            return path
        
        for vertex in self.vertices[starting_vertex]:
            if vertex not in visited_set:
                new_path = self.dfs_recursive(vertex, destination_vertex, visited_set, path)
                
                if new_path is not None:
                    return new_path
        return None
        
   
graph = Graph()

arr = [(1,2), (2,3), (2,7)]

graph.add_node(1).add_node(2).add_node(3).add_node(4).add_node(10)

graph.dynamic_add_edge(arr)

# graph.add_edge(1,2).add_edge(1,10).add_edge(2,10).add_edge(2,3).add_edge(3,4)

print(graph.vertices)
   

# graph
#   |1| 2 | 3 | 4
# |1| | A |
# |2| |   | B | 
# |3| |   |   | C
# |4|
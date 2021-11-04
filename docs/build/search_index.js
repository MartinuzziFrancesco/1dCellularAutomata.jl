var documenterSearchIndex = {"docs":
[{"location":"onedim/onedimensionca/#General-Cellular-Automata","page":"One dimensional CA","title":"General Cellular Automata","text":"","category":"section"},{"location":"onedim/onedimensionca/","page":"One dimensional CA","title":"One dimensional CA","text":"Some text here and there","category":"page"},{"location":"onedim/onedimensionca/#Elementary-Cellular-Automata","page":"One dimensional CA","title":"Elementary Cellular Automata","text":"","category":"section"},{"location":"onedim/onedimensionca/","page":"One dimensional CA","title":"One dimensional CA","text":"Some text here and there","category":"page"},{"location":"onedim/onedimensionca/#Multiple-States-Cellular-Automata","page":"One dimensional CA","title":"Multiple States Cellular Automata","text":"","category":"section"},{"location":"onedim/onedimensionca/","page":"One dimensional CA","title":"One dimensional CA","text":"Some text here and there","category":"page"},{"location":"onedim/onedimensionca/#Larger-Radius-Cellular-Automata","page":"One dimensional CA","title":"Larger Radius Cellular Automata","text":"","category":"section"},{"location":"onedim/onedimensionca/","page":"One dimensional CA","title":"One dimensional CA","text":"Some text here and there","category":"page"},{"location":"user/twodimensionca/#Life-like-Cellular-Automata","page":"Two Dimensial CA","title":"Life-like Cellular Automata","text":"","category":"section"},{"location":"user/twodimensionca/","page":"Two Dimensial CA","title":"Two Dimensial CA","text":"    Life","category":"page"},{"location":"user/twodimensionca/#CellularAutomata.Life","page":"Two Dimensial CA","title":"CellularAutomata.Life","text":"Life(life_description; radius=1)\n\nReturns a Life object given a tuple of tuples that follows the Golly notation ((b), (s)), where b stands for birth and s for survival.  These values indicates the number of neighbouring cells needed to birth a new one in the following generation, or to make the current alive  one survive.\n\n\n\n\n\n","category":"type"},{"location":"user/onedimensionca/#General-Dicrete-Cellular-Automata","page":"One Dimensional CA","title":"General Dicrete Cellular Automata","text":"","category":"section"},{"location":"user/onedimensionca/","page":"One Dimensional CA","title":"One Dimensional CA","text":"    DCA","category":"page"},{"location":"user/onedimensionca/#CellularAutomata.DCA","page":"One Dimensional CA","title":"CellularAutomata.DCA","text":"DCA(rule; states=2, radius=1)\n\nReturns a DCA object given a specific rule, number of states and radius. The ruleset for the rule is computed and  stored in the struct as well.\n\n\n\n\n\n","category":"type"},{"location":"user/onedimensionca/#Totalistic-Discrete-Cellular-Automata","page":"One Dimensional CA","title":"Totalistic Discrete Cellular Automata","text":"","category":"section"},{"location":"user/onedimensionca/","page":"One Dimensional CA","title":"One Dimensional CA","text":"    TCA","category":"page"},{"location":"user/onedimensionca/#CellularAutomata.TCA","page":"One Dimensional CA","title":"CellularAutomata.TCA","text":"TCA(code; states=2, radius=1)\n\nReturns a TCA object given a specific code, number of states and radius. The ruleset for the rule is computed and  stored in the struct as well.\n\n\n\n\n\n","category":"type"},{"location":"user/onedimensionca/#Continous-Cellular-Automata","page":"One Dimensional CA","title":"Continous Cellular Automata","text":"","category":"section"},{"location":"user/onedimensionca/","page":"One Dimensional CA","title":"One Dimensional CA","text":"    CCA","category":"page"},{"location":"user/onedimensionca/#CellularAutomata.CCA","page":"One Dimensional CA","title":"CellularAutomata.CCA","text":"TCA(code; radius=1)\n\nReturns a CCA object given a specific code and radius. \n\n\n\n\n\n","category":"type"},{"location":"#CellularAutomata.jl","page":"CellularAutomata.jl","title":"CellularAutomata.jl","text":"","category":"section"},{"location":"","page":"CellularAutomata.jl","title":"CellularAutomata.jl","text":"This package is meant to be a complete Open source reference for everything regarding Cellular Automata. In it you will find wayd to create one and two dimensional Cellular Automata models and functions  to analyze them","category":"page"},{"location":"#General-usage","page":"CellularAutomata.jl","title":"General usage","text":"","category":"section"},{"location":"","page":"CellularAutomata.jl","title":"CellularAutomata.jl","text":"The main function is given by CellularAutomaton","category":"page"},{"location":"","page":"CellularAutomata.jl","title":"CellularAutomata.jl","text":"    CellularAutomaton","category":"page"},{"location":"#CellularAutomata.CellularAutomaton","page":"CellularAutomata.jl","title":"CellularAutomata.CellularAutomaton","text":"CellularAutomaton(rule::AbstractODRule, initial_conditions, generations)\nCellularAutomaton(rule::AbstractTDRule, initial_conditions, generations)\n\nGiven a cellular automata rule (inluded in the library or provided by the user) returns a CellularAutomaton evolution with given initial conditions and number of generations. OD indicates one-diomensional cellular automata rules, TD indicates two-dimensiona cellular automata rules.\n\n\n\n\n\n","category":"type"},{"location":"","page":"CellularAutomata.jl","title":"CellularAutomata.jl","text":"where rule is a function returning the next state of the Cellular Automata. ","category":"page"},{"location":"#Contributions","page":"CellularAutomata.jl","title":"Contributions","text":"","category":"section"},{"location":"","page":"CellularAutomata.jl","title":"CellularAutomata.jl","text":"Contributions are more than welcomed! The package is in the early days, so expet things to change a lot. For everything  do contact me or open an issue about it.","category":"page"}]
}

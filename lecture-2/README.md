How Bitcoin Achieves Decentralization  
==  

Centralization vs. Decentralization    
----  
The power of bitcoin lies within it's decentralization. Without it, it would be
like any other currency that is regulated in a centralized organization.  
Bitcoin achieves decentralization by a combination of clever technical and
incentive engineering.  

The questions we want to answer here are these :  
* Who maintains this ledger of transactions?  
* Who has authority over which transactions are valid?  
* Who creates new Bitcoins?  
* Who determines how the rules of the system change?  
* How do Bitcoins acquire exchange value?  
*(Only the first three quesions will be answered in this lecture)*

Distributed Consensus  
----  
For a system to be purely decentralized, we need to find a way to reach a
decentralized consensus. This subject has been studied in Computer Science theory
for many years, and is not trivial at all.  

When a bitcoin transation is made, it is broadcasted to the whole peer 2 peer
network. All nodes on the network know about the transaction.  
If Alice wants to pay Bob, then Alice can sign the transaction, and broadcast it.
Bob doesn't even need to be connected to the network for that to happen.  
So, for this distributed consensus to work, bitcoin has a blockchain of transactions
that all the nodes in the network agree upon. If a transaction is made that they
don't all agree upon, then it won't be written in all the nodes, hence won't be
part of the distributed consensus.  

There are many difficulties in designing a system like this that will actually work.
There are problems like - not all nodes are actually connected to all other
nodes in the network. Also, there is latency in the network. And finally, a big challenge
is ordering of events - There is no notion of global time. You can't rely on a specific
time for transactions to be written.  

Bitcoin solves these problems by using incentives. This doesn't really solve the
problems we stated in a general sense, but in the context of a currency it works
just fine.  

Consensus without Identity: the Block Chain  
----
Another important issues that makes achieving consensus with bitcoin difficult
is the fact that nodes in the network don't have identities. If they did, it would
make consensus a little easier, but pseudonymity is one of the main goals of bitcoin.
Although you can connect transactions to the same entity together in the blockchain,
you are not required to supply your real identity to participate in the network.  

So how is the blockchain built ? Let's say for each block we want to build,
a random node in the network is chosen. This node will be allowed to propose
the next block on the chain, and broadcast it to all the other nodes in the network.
Each node in the system will check if the new block is valid, and decide to accept
or reject it. Since the node has to contain the correct hash pointers and Signatures
of all the transactions, then assuming the underlying crypto technologies are
unbreakable, then we can tell for sure if this block is a valid block or not.  

A few different attacks can be made here :  
If a node decides that it won't pass transactions by a certain user. This is possible,
but won't be more than a small annoyance in the network. The user's transaction will
eventually be accepted by a different node that gets to propose the next block on
the chain.  
Another attack can be the double spend attack. This can work by someone broadcasting
that they are spending the same coin in 2 different transactions. What will happen
here is that one of the transactions will be accepted and be part of the blockchain
and the other won't. So if you are a merchant that accepts bitcoin, your way of
making sure you're not under a double spend attack, is by waiting a small amount
of time and making sure your transaction was accepted on the consensus blockchain
by seeing a certain number of valid transactions after the one you want to validate.  
There's no specific number of transactions that proves yours is validated, but the
consensus on this issue is to wait for 6 blocks after the one you want to
validate.  

Incentives and Proof of Work  
----  

Introduction to Crypto and Cryptocurrencies  
==  

Cryptographic hash functions  
----  
A good cryptographic hash function needs to have 3 properties.  
1. Collision free - This means that no _can find_ 2 inputs can generate the same output.  
2. Hiding - There's no feasible way to find out what the input of a hash function was, only given it's output.  
3. Puzzle friendly - Means that there is no solving strategy to find out how outputs were created.  

Hash Pointers and Data Structures  
----
A **hash pointer** is like a regular pointer to a piece of data, but in addition
it also holds a cryptographic hash of the data it points to. This gives us the ability
to make sure the hash pointer we have points to data that wasn't changed.  

**Blockchain** - A blockchain is basically a linked list, but instead of regular pointers
we use hash pointers. This gives us the important ability to validate the whole list.  
If we check that each hash is correct, then we know for sure that know one tampered with the data.  

**Merkle Trees** - A binary tree, that instead of regular pointers is created with hash pointers.  
Like a blockchain, here too, we can verify that the data wasn't changed. In addition,
we can also verify that a specific block belongs to the tree just by showing us it's
specific path to the root of the tree, since we only need the hashes along the way.  

In general we can use hash pointers instead of regular pointers in any data structure
that doesn't have cycles in it.  

Digital Signatures  
----
A digital signature is similar to a hand written signature, but in digital form.  
It should have two main properties :  
1. Only you can make your signature.  
2. Anyone that sees your signature can validate that you created it.  

A standard API for digital signatures should look like this :
* **generateKeys()** - We tell it how many bits each key should be, and it will generate a
public key and a secret key, marked as pk and sk respectively.  
* **sign()** - You give it your secret signing key and a message you want to sign, and it
will output your signature.  
* **verify()** - Input is a signed message and a public key of who signed it, and it
returns 'true' or 'false' if the person that claimed to sign it, really did sign it.  

**Note :** Since we don't know what the size of the message we want to sign is, then
it is enough to sign just the hash of the message. So a good trick to use is that we
can sign just the hash pointer that points to a blockchain, and that actually means
we are signing the whole blockchain.  

(bitcoin uses the [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) signature, which is a government standard)

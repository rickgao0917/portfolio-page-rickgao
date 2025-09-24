import { StudyNote } from '@/types/study';

const content = `# Chapter 1: Probability and Counting

## Section 1.2: Sample Spaces
\
### Definition 1.2.1: Sample Space and Event
The **Sample space** $S$ is the set of all possible outcomes in an experiment $A$, where $S$ can be finite, countably infinite or uncountably infinite.

Let $A, B, \\subseteq S$ be events in the sample space $S$.
- $A \\cup B$ are events that occur IFF *at least* one of $A, B$ occurs
- $A \\cap B$ are events that occur IFF both $A, B$ occurs
- $A^c$ is the event that occurs IFF $A$ does not occur

**De Morgan's Laws**
* $(A \\cup B)^c = A^c \\cap B^c$
* $(A \\cap B)^c = A^c \\cup B^c$
\
### Example 1.2.2: Coin Flip
1. A coin is flipped 10 times. Let heads equal $H$ and tails $T$, where $H = 1$ and $T = 0$. Then the sample space of this experiment is denoted as: $$S = \\{s_{1} \\cdots s_{10}: s_{j} \\in \\{0,1\\} \\text{ for } 1 \\leq j \\leq 10\\}$$
    * Let $B$ be the event that there is at least one flip that is $H$, denoted $B = \\bigcup_{j=1}^{10} A_j$
    * Let $C$ be the event that there is only $H$, denoted $C = \\bigcap_{j=1}^{10} A_j$
\
## Section 1.3: Naive Probability
\
### Definition 1.3.1: Naive Definition of Probability
$$P_{\\text{naive}}(A) = \\frac{|A|}{|S|}$$
where $A$ is the number of desired outcomes, and $B$ is the total state space $S$.
$$P_{\\text{naive}}(A^c) = \\frac{|A^c|}{|S|} = \\frac{|S| - |A|}{|S|} = 1 - \\frac{|A|}{|S|} = 1 - P_{\\text{naive}}(A)$$
- Very $S$ must be finite, and with equal mass for each pebble
  Applications under this assumption
  - *symmetry* in the problem makes all outcomes equally likely, i.e. coin flips
  - equally likely by *design*, i.e. a survey of $n$ people from $N$ population
  - serves as a *null*, we assume the naive and compare against observed
\
## Section 1.4: How to Count
\
### Theorem 1.4.1: Multiplication Rule
Assume a compound experiment $C$ consisting of sub-experiments $A$ and $B$, where $A$ has $a$ outcomes and $B$ has $b$ outcomes, and then we would have $ab$ outcomes in experiment $C$.

If $A$ had 3 outcomes and $B$ had 4, $3*4 = 12$ Let the tree branch $a$ ways and for each of those branches make $b$ further branches, resulting in $ab$ possibilities.

A *permutation* of $1,2, \\cdots ,n$ is an arrangement of them in some order. $\\{3,1,2,4,5\\}$ is a permutation of $\\{1,2,3,4,5\\}$. There are $n!$ permutations for $n$ elements.
\
### Note 1.4.2
Experiments for multiplication rule need not be in chronological order.
\
### Example 1.4.3: Runners
Let 10 people be in a race, number of 1st, 2nd, and 3rd placers: $10\\cdot 9 \\cdot 8 = 720$
\
### Example 1.4.4: Chessboard
Given an $n*m$ chessboard, what is the number of squares. Example of multiplication rule: you have $n$ row choices and $m$ column choices, therefore $nm$ total squares.
\
### Example 1.4.5: Ice Cream Cones
You can choose to have a cake or waffle cone, and whether to have chocolate, vanilla or strawberry as the flavor. Total number of possibilities is $2*3 = 6$
\
### Example 1.4.6: Subsets
A set with $n$ elements has $2^n$ subsets, including the empty set $\\varnothing$ and the set itself
\
### Theorem 1.4.7: Sampling with Replacement
Consider choosing $n$ objects and making $k$ choices with them, one at a time *with replacement*, then there would be $n^k$ outcomes, as $\\{3,7\\}$ is distinct from $\\{7,3\\}$.
\
### Theorem 1.4.8: Sampling without Replacement
Consider choosing $n$ objects and making $k$ choices from them, one at a time *without replacement*. There would be $n(n-1)\\cdots(n-k+1)$ possible outcomes for $1 \\leq k \\leq n$, and 0 possibilities for $k > n$ (where order matters). By convention, $n(n-1)\\cdots (n-k+1) = n$ for $k = 1$.
\
### Example 1.4.9: Permutations and Factorials
A *permutation* of $1,2,\\cdots, n$ is an arrangement of them in some order, i.e. $3,5,1,2,4$ is a permutation of $1,2,3,4,5$. By Theorem 1.4.8 with $k = n$, there are $n!$ permutations of $1,2,\\cdots, n$.
\
### Example 1.4.10: Birthday Problem
There are $k$ people in a room, assume equal probability of birthdays across 365 days and the distribution of birthdays is independent. Give the probability of at least one pair of people in the group having the same birthday?
Total ways to assign birthdays: $$365^k$$Naive definition applies as all possibilities are equally likely.
$$P(\\text{No Birthday Matches}) = \\frac{(365*364\\cdots (365-k+1))}{365^k}$$
Take the complement for birthday matches:
$$P(\\text{Match}) = 1 - \\frac{(365*364\\cdots (365-k+1))}{365^k}$$
Where the 50% mark is 23.
At 23, we are making $\\binom{23}{2} = 253$ pairs of comparisons, from which any pair suffices the requirement.
\
### Note 1.4.11: Labeling Objects
Objects in a population can be named, even if they are identical to the eye, assume that there is some form of identifier (distinguishable instead of indistinguishable)
\
### Example 1.4.12: Leibniz's Mistake
Rolling two fair dice, what is more likely, sum of 11 or 12? There's 36 total combinations. 11 is more likely than 12, given that $(5,6)$ and $(6,5)$ are separate events, as opposed to what Leibniz had treated them as, which were a singular event.
\
### 1.4.2 Adjusting for Overcounting
If we are not able to count exactly the correct combinations, but can overcount by exactly $c$ times, we can divide by $c$ to get to the correct combinations.
\
### Example 1.4.13: Committees and Teams
- How many ways are there to choose a two-person committee given a group of 4 people?
    - Via multiplication rule, you have $4*3$ but you overcount by $2$ times, so you have $6$ total ways
- How many ways are there to break the people into two teams of two?
    - There are 6 ways to choose one team, but you overcount by a factor of 2, so you have $3$ total teams.
\
### Definition 1.4.14
For any nonnegative integers $k$ and $n$, the binomial coefficient $\\binom{n}{k}$ dictates the number of subsets of size $k$ for the set of size $n$.
\
### Theorem 1.4.15: Binomial Coefficient Formula
For $k \\leq n$, we have
$$\\binom{n}{k} = \\frac{n(n-1)\\cdots(n-k+1)}{k!} = \\frac{n!}{(n-k)!k!}$$
For $k > n$, we have $\\binom{n}{k} = 0$

**Proof**:
Let $A$ be a set with $|A| = n$. Any subset of $A$ has at most $n$, so $\\binom{n}{k} = 0$ for $k > n$.
Now let $k \\leq n$ . By Theorem 1.4.8, there are $n(n-1)\\cdots(n-k+1)$ ways to make an $ordered$ choice of $k$ elements without replacement. This overcounts each subset by a factor of $k!$.
\
### Note 1.4.16
$\\binom{n}{k}$ where $k > n$ is 0, even though negative factorials are undefined. The middle expression for the binomial coefficient is better computationally as it avoids factorial growth.
\
### Example 1.4.17: Club Officers
In a club with $n$ people, there are $n(n-1)(n-2)$ ways to choose a president, vice president, and treasurer, and $$\\binom{n}{3} = \\frac{n(n-1)(n-2)}{3!}$$ ways to choose 3 officers without predetermined titles.
\
### Example 1.4.18: Permutations of a Word
How many ways to permute the letters in the word $LALALAAA$. We can either determine where the $A's$ go (5 positions) or where the 3 $L's$ go. $$\\binom{8}{5} = \\binom{8}{3} = 56$$ $STATISTICS$
You can choose where to put the $S's$, $T's$ (from what remains), $I's$, $A$, or you can start with $10!$ and adjust for overcounting, by dividing by $3!3!2!$ to account for the fact that the $S's$ can be permuted amongst themselves, and likewise for the $T's$ and $I's$. $$\\binom{10}{3}\\binom{7}{3}\\binom{4}{2}\\binom{2}{1} = \\frac{10!}{3!3!2!} = 50400$$
\
### Example 1.4.19: Binomial Theorem
The *binomial theorem* states that $$(x+y)^n = \\sum^n_{k=0}\\binom{n}{k}x^ky^{n-k}$$
for any nonnegative integer $n$. Expand out the product $$(x+y)(x+y)\\cdots(x+y)$$
The terms are obtained by picking either the $x$ or $y$ from each factor. There are $\\binom{n}{k}$ ways to choose exactly $k$ of the $x's$, and each choice yields the term $x^k y^{n-k}$.
\
### Example 1.4.20: Full House in Poker
All $\\binom{52}{5}$ hands are equally via symmetry, so the naive definition applies. We need a set of 3 cards from a rank and a set of 2 cards from a rank, so we have $\\binom{4}{3}$ ways for the set of 3 cards, and $\\binom{4}{2}$ ways for the set of 2 cards. So we have: $$P(FH) = \\frac{13\\binom{4}{3}12\\binom{4}{2}}{\\binom{52}{5}} = \\frac{3744}{2598960}\\approx 0.00144$$
\
### Example 1.4.21: Newton-Pepys Problem
Which of the following events has the highest probability?
- At least one 6 appears when 6 fair sided dice are rolled
  You have $6^6$ possible combinations, so we can take the complement by subtracting out the probability that no dice are sixes. $$P(S) = 1 - \\left(\\frac{5}{6}\\right)^6\\approx0.67$$
- At least two 6's appear when 12 fair sided dice are rolled
  You have $6^{12}$ possible combinations. We apply complement rule again, but must consider the case where we allow exactly one 6 to be rolled. $$P(S) = 1 - \\frac{5^{12}+\\binom{12}{1}5^{11}}{6^{12}}\\approx0.62$$
- At least three 6's appear when 18 fair dice are rolled
  You have $6^{18}$ possible combinations. Same idea as the 12 fair sided dice, where you also consider the case where two 6's are allowed. $$P(S) = 1 - \\frac{5^{18}+\\binom{18}{1}5^{17}+\\binom{18}{2}5^{16}}{6^{18}}\\approx0.60$$
\
### 1.4.22 Bose-Einstein
The number of ways to choose $k$ times from a set of $n$ objects with replacement where order doesn't matter. When order does matter, we know that there are $n^k$ ways by *Theorem 1.4.7*. We can approach this by utilizing the Bose-Einstein encoding. For example, say $k = 7$ and $n = 4$, where we can have walls and particles.

For a sequence to be valid, it must start and end with a $|$ , and have exactly $n-1$ $|$'s and exactly $k$ particles between the start and end $|$'s. Conversely, any such sequence is a valid encoding for some configuration of particles in boxes. Then, there would be $n+k-1$ slots to be filled between the outer walls, and we only need to choose where to put the $k$ particles (since then where the $n+k-1$ interior $|$'s are completely determined), which results in the number of possibilities being $$\\binom{n+k-1}{k}$$, also known as stars and bars.
\
### Note 1.4.23
The stars and bars equation shouldn't be used in the naive definition of probability except in certain circumstances. Say we are collecting a sample of size $k$ from a population of size $n$ one at a time, with replacement and with equal probabilities. Theorem 1.4.7 applies, but $\\binom{n+k-1}{k}$ cannot be used as the unordered samples are *not* equally likely.
\
## Section 1.5: Story Proofs
\
### Example 1.5.1: Choosing the Complement
$$\\binom{n}{k} = \\binom{n}{n-k}$$ Consider a committee of size $k$ in a group of $n$ people, we can either do $\\binom{n}{k}$ or we can do $\\binom{n}{n-k}$ for ways to select people who are not in the committee.
\
### Example 1.5.2: The Team Captain
Suppose we want to choose a group of $k$ people from $n$ people and also select a *leader* from among them.

There are two ways to count the number of ways to do this:

- First, choose the leader (in $n$ ways), and then choose the remaining $k-1$ group members from the remaining $n-1$ people. This can be done in
  $$
  n \\binom{n-1}{k-1}
  $$
  ways.

- Alternatively, first choose all $k$ group members at once (in $\\binom{n}{k}$ ways), and then select the leader among the $k$ chosen members (in $k$ ways). This can be done in
  $$
  k \\binom{n}{k}
  $$
  ways.

Since both methods count the same quantity, then
$$
n \\binom{n-1}{k-1} = k \\binom{n}{k}.
$$
\
### Example 1.5.3: Vandermonde's Identity
$$\\binom{m+n}{k} = \\sum_{j=0}^{k}\\binom{m}{j}\\binom{n}{k-j}$$
Suppose there are two groups:
- The first group has $m$ people.
- The second group has $n$ people.

We want to choose a total of $r$ people.

There are two ways to count this:

- Directly: choose $r$ people from all $m+n$ people:
  $$
  \\binom{m+n}{r}.
  $$

- Alternatively: for each $k$ between $0$ and $r$, choose $k$ people from the first group (in $\\binom{m}{k}$ ways) and $r-k$ people from the second group (in $\\binom{n}{r-k}$ ways).

Thus, summing over all $k$:
$$
\\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}.
$$

Since both methods count the same thing
$$
\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}.
$$
\
### Example 1.5.4: Partnerships
Imagine $2n$ people. We want to pair them up into $n$ pairs.

- First, arrange all $2n$ people: $(2n)!$ ways.
- But order inside pairs doesn't matter: divide by $2^n$.
- And order of the pairs doesn't matter: divide by $n!$.

  Thus, the number of ways is:
  $$
  \\frac{(2n)!}{2^n n!}.
  $$

  Expand $(2n)!$:
  $$
  (2n)! = (2n)(2n-1)(2n-2)(2n-3)\\cdots 2\\cdot 1.
  $$

  Group as:
  $$
  = [(2n)(2n-2)\\cdots 2] \\times [(2n-1)(2n-3)\\cdots 1].
  $$

  Note:
  $$
  (2n)(2n-2)\\cdots 2 = 2^n n!.
  $$

  Thus:
  $$
  (2n)! = (2^n n!) (2n-1)(2n-3)\\cdots 1,
  $$
  so dividing both sides:
  $$
  \\frac{(2n)!}{2^n n!} = (2n-1)(2n-3)\\cdots 1.
  $$
\
## Section 1.6: Non-naive Definition of Probability
The *frequentist* view of probability is that it represents the long-run frequency, i.e. coin toss would approach $\\frac{1}{2}$ heads as number of experiments increases to infinity.
The *Bayesian* view of probability represents a degree of belief about the event in question
\
### Definition 1.6.1: General Definition of Probability
A *probability space* consists of a sample space $S$ and a *probability function* $P$ which takes an event $A \\subseteq S$ as an input and returns $P(A)$, $x \\in \\mathbb{R} | (0 < x < 1)$ , as an output. The function $P$ must satisfy the following axioms:
1. $P(\\emptyset) = 0, P(S) = 1$
2. If $A_1, A_2, \\cdots$ are disjoint, then $$P\\left( \\bigcup_{j=1}^{\\infty} A_j \\right) = \\sum_{j=1}^{\\infty} P(A_j)$$

#### Derangements
A derangement is a subset where no element is in the correct order.
$$
D_n = \\text{total permutations} - \\text{permutations with at least one fixed point}.
$$

By Inclusion-Exclusion:

$$
\\left| A_1 \\cup A_2 \\cup \\cdots \\cup A_n \\right| = \\sum_{i} |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap \\cdots \\cap A_n|
$$

where:

- $|A_i| = (n-1)!$,
- $|A_i \\cap A_j| = (n-2)!$,
- $|A_i \\cap A_j \\cap A_k| = (n-3)!$,
- In general: $|A_{i_1} \\cap \\cdots \\cap A_{i_k}| = (n-k)!$.

Thus:

$$
\\left| A_1 \\cup A_2 \\cup \\cdots \\cup A_n \\right| = \\sum_{k=1}^{n} (-1)^{k+1} \\binom{n}{k} (n-k)!
$$

Then:

$$
D_n = n! - \\left| A_1 \\cup A_2 \\cup \\cdots \\cup A_n \\right|
$$

Substituting:

$$
D_n = n! \\left( 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + (-1)^n \\frac{1}{n!} \\right)
$$

Thus the probability:

$$
P_n = \\frac{D_n}{n!} = 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + (-1)^n \\frac{1}{n!}
$$

Limit:

$$
\\lim_{n\\to\\infty} P_n = \\frac{1}{e}.
$$

**Recursive Definition**:
$$
D_0 = 1, \\quad D_1 = 0,
$$

and for $n \\geq 2$:

$$
D_n = (n-1)(D_{n-1} + D_{n-2}).
$$
\
### Theorem 1.6.2: Properties of Probability
1. $P(A^c) = 1 -P(A)$
   Since $A$ and $A^c$ are disjoint, and the union is $S$, axiom two gives $$P(S) = P(A \\cup A^c) = P(A) + P(A^c)$$and since $P(S) = 1$ by axiom 1, we have $P(A) + P(A^c) = 1$

2. If $A \\subseteq B$ , then $P(A) \\leq P(B)$
   If $A \\subseteq B$ , then $B$ can be written as $A \\cup (B \\cap A^c)$ , where $B \\cap A^c$ is the part of $B$ not also in $A$.
   Since $A$ and $B \\cap A^c$ are disjoint, then we can apply the second axiom $$P(B) = P(A \\cup (B \\cap A^c)) = P(A) + P(B \\cap A^c)$$ and probability is non-negative, so $P(B\\cap A^c) \\geq 0$

3. $P(A\\cup B) = P(A) + P(B) - P(A \\cap B)$
   The shaded region is $A \\cup B$, but it is not the probability as we would have double counted $A \\cap B$, so we must subtract out $A \\cap B$ to reach the correct probability.
   Let $A \\cup B = A \\cup (B \\cap A^c)$ , then by the second axiom $$P(A \\cup B) = P(A \\cup (B \\cap A^c)) = P(A) + P(B \\cap A^c)$$ This shows that $P(B \\cap A^c) = P(B) - P(A \\cap B)$ , and since $A\\cap B$ and $B \\cap A^c$ are disjoint, another application of the second axiom gets us $$P(A \\cap B) + P(B \\cap A^c) = P(B)$$
\
### Theorem 1.6.3: Inclusion-Exclusion
$$P\\left( \\bigcup_{i=1}^{n} A_i \\right) = \\sum_{i} P(A_i) - \\sum_{i<j} P(A_i \\cap A_j) + \\sum_{i<j<k} P(A_i \\cap A_j \\cap A_k) - \\cdots + (-1)^{n+1} P(A_1 \\cap \\cdots \\cap A_n).$$
\
### Example 1.6.4: de Montmort's Matching Problem
Suppose there are $n$ letters and $n$ addressed envelopes. The letters are randomly placed into the envelopes. What is the probability that **no letter ends up in the correct envelope**?
The formula for $D_n$ is:

$$
D_n = n! \\left( 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + (-1)^n \\frac{1}{n!} \\right)
$$

Thus, the **probability** that no letter is in its correct envelope is:

$$
P_n = \\frac{D_n}{n!} = 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + (-1)^n \\frac{1}{n!}
$$

As $n$ becomes large:

$$
\\lim_{n \\to \\infty} P_n = \\frac{1}{e} \\approx 0.3679
$$
\
---

## Quick Reference

### Definitions

#### Definition 1.2.1: Sample Space and Event
The **Sample space** $S$ is the set of all possible outcomes in an experiment $A$, where $S$ can be finite, countably infinite or uncountably infinite.

Let $A, B, \\subseteq S$ be events in the sample space $S$.
- $A \\cup B$ are events that occur IFF *at least* one of $A, B$ occurs
- $A \\cap B$ are events that occur IFF both $A, B$ occurs
- $A^c$ is the event that occurs IFF $A$ does not occur

**De Morgan's Laws**
* $(A \\cup B)^c = A^c \\cap B^c$
* $(A \\cap B)^c = A^c \\cup B^c$

#### Definition 1.3.1: Naive Definition of Probability
$$P_{\\text{naive}}(A) = \\frac{|A|}{|S|}$$
where $A$ is the number of desired outcomes, and $B$ is the total state space $S$.
$$P_{\\text{naive}}(A^c) = \\frac{|A^c|}{|S|} = \\frac{|S| - |A|}{|S|} = 1 - \\frac{|A|}{|S|} = 1 - P_{\\text{naive}}(A)$$

#### Definition 1.4.14: Binomial Coefficient
For any nonnegative integers $k$ and $n$, the binomial coefficient $\\binom{n}{k}$ dictates the number of subsets of size $k$ for the set of size $n$.

#### Definition 1.6.1: General Definition of Probability
A *probability space* consists of a sample space $S$ and a *probability function* $P$ which takes an event $A \\subseteq S$ as an input and returns $P(A)$, $x \\in \\mathbb{R} | (0 < x < 1)$ , as an output. The function $P$ must satisfy the following axioms:
1. $P(\\emptyset) = 0, P(S) = 1$
2. If $A_1, A_2, \\cdots$ are disjoint, then $$P\\left( \\bigcup_{j=1}^{\\infty} A_j \\right) = \\sum_{j=1}^{\\infty} P(A_j)$$

### Theorems

#### Theorem 1.4.1: Multiplication Rule
Assume a compound experiment $C$ consisting of sub-experiments $A$ and $B$, where $A$ has $a$ outcomes and $B$ has $b$ outcomes, and then we would have $ab$ outcomes in experiment $C$.

If $A$ had 3 outcomes and $B$ had 4, $3*4 = 12$ Let the tree branch $a$ ways and for each of those branches make $b$ further branches, resulting in $ab$ possibilities.

#### Theorem 1.4.7: Sampling with Replacement
Consider choosing $n$ objects and making $k$ choices with them, one at a time *with replacement*, then there would be $n^k$ outcomes, as $\\{3,7\\}$ is distinct from $\\{7,3\\}$.

#### Theorem 1.4.8: Sampling without Replacement
Consider choosing $n$ objects and making $k$ choices from them, one at a time *without replacement*. There would be $n(n-1)\\cdots(n-k+1)$ possible outcomes for $1 \\leq k \\leq n$, and 0 possibilities for $k > n$ (where order matters). By convention, $n(n-1)\\cdots (n-k+1) = n$ for $k = 1$.

#### Theorem 1.4.15: Binomial Coefficient Formula
For $k \\leq n$, we have
$$\\binom{n}{k} = \\frac{n(n-1)\\cdots(n-k+1)}{k!} = \\frac{n!}{(n-k)!k!}$$
For $k > n$, we have $\\binom{n}{k} = 0$

**Proof**:
Let $A$ be a set with $|A| = n$. Any subset of $A$ has at most $n$, so $\\binom{n}{k} = 0$ for $k > n$.
Now let $k \\leq n$ . By Theorem 1.4.8, there are $n(n-1)\\cdots(n-k+1)$ ways to make an $ordered$ choice of $k$ elements without replacement. This overcounts each subset by a factor of $k!$.

#### Theorem 1.6.2: Properties of Probability
1. $P(A^c) = 1 -P(A)$
   Since $A$ and $A^c$ are disjoint, and the union is $S$, axiom two gives $$P(S) = P(A \\cup A^c) = P(A) + P(A^c)$$and since $P(S) = 1$ by axiom 1, we have $P(A) + P(A^c) = 1$

2. If $A \\subseteq B$ , then $P(A) \\leq P(B)$
   If $A \\subseteq B$ , then $B$ can be written as $A \\cup (B \\cap A^c)$ , where $B \\cap A^c$ is the part of $B$ not also in $A$.
   Since $A$ and $B \\cap A^c$ are disjoint, then we can apply the second axiom $$P(B) = P(A \\cup (B \\cap A^c)) = P(A) + P(B \\cap A^c)$$ and probability is non-negative, so $P(B\\cap A^c) \\geq 0$

3. $P(A\\cup B) = P(A) + P(B) - P(A \\cap B)$
   The shaded region is $A \\cup B$, but it is not the probability as we would have double counted $A \\cap B$, so we must subtract out $A \\cap B$ to reach the correct probability.

#### Theorem 1.6.3: Inclusion-Exclusion
$$P\\left( \\bigcup_{i=1}^{n} A_i \\right) = \\sum_{i} P(A_i) - \\sum_{i<j} P(A_i \\cap A_j) + \\sum_{i<j<k} P(A_i \\cap A_j \\cap A_k) - \\cdots + (-1)^{n+1} P(A_1 \\cap \\cdots \\cap A_n).$$

### Examples

#### Example 1.2.2: Coin Flip
A coin is flipped 10 times. Let heads equal $H$ and tails $T$, where $H = 1$ and $T = 0$. Then the sample space of this experiment is denoted as: $$S = \\{s_{1} \\cdots s_{10}: s_{j} \\in \\{0,1\\} \\text{ for } 1 \\leq j \\leq 10\\}$$
* Let $B$ be the event that there is at least one flip that is $H$, denoted $B = \\bigcup_{j=1}^{10} A_j$
* Let $C$ be the event that there is only $H$, denoted $C = \\bigcap_{j=1}^{10} A_j$

#### Example 1.4.3: Runners
Let 10 people be in a race, number of 1st, 2nd, and 3rd placers: $10\\cdot 9 \\cdot 8 = 720$

#### Example 1.4.4: Chessboard
Given an $n*m$ chessboard, what is the number of squares. Example of multiplication rule: you have $n$ row choices and $m$ column choices, therefore $nm$ total squares.

#### Example 1.4.5: Ice Cream Cones
You can choose to have a cake or waffle cone, and whether to have chocolate, vanilla or strawberry as the flavor. Total number of possibilities is $2*3 = 6$

#### Example 1.4.6: Subsets
A set with $n$ elements has $2^n$ subsets, including the empty set $\\varnothing$ and the set itself

#### Example 1.4.9: Permutations and Factorials
A *permutation* of $1,2,\\cdots, n$ is an arrangement of them in some order, i.e. $3,5,1,2,4$ is a permutation of $1,2,3,4,5$. By Theorem 1.4.8 with $k = n$, there are $n!$ permutations of $1,2,\\cdots, n$.

#### Example 1.4.10: Birthday Problem
There are $k$ people in a room, assume equal probability of birthdays across 365 days and the distribution of birthdays is independent. Give the probability of at least one pair of people in the group having the same birthday?
Total ways to assign birthdays: $$365^k$$
Naive definition applies as all possibilities are equally likely.
$$P(\\text{No Birthday Matches}) = \\frac{(365*364\\cdots (365-k+1))}{365^k}$$
Take the complement for birthday matches:
$$P(\\text{Match}) = 1 - \\frac{(365*364\\cdots (365-k+1))}{365^k}$$
Where the 50% mark is 23.
At 23, we are making $\\binom{23}{2} = 253$ pairs of comparisons, from which any pair suffices the requirement.

#### Example 1.4.12: Leibniz's Mistake
Rolling two fair dice, what is more likely, sum of 11 or 12? There's 36 total combinations. 11 is more likely than 12, given that $(5,6)$ and $(6,5)$ are separate events, as opposed to what Leibniz had treated them as, which were a singular event.

#### Example 1.4.13: Committees and Teams
- How many ways are there to choose a two-person committee given a group of 4 people?
    - Via multiplication rule, you have $4*3$ but you overcount by $2$ times, so you have $6$ total ways
- How many ways are there to break the people into two teams of two?
    - There are 6 ways to choose one team, but you overcount by a factor of 2, so you have $3$ total teams.

#### Example 1.4.17: Club Officers
In a club with $n$ people, there are $n(n-1)(n-2)$ ways to choose a president, vice president, and treasurer, and $$\\binom{n}{3} = \\frac{n(n-1)(n-2)}{3!}$$ ways to choose 3 officers without predetermined titles.

#### Example 1.4.18: Permutations of a Word
How many ways to permute the letters in the word $LALALAAA$. We can either determine where the $A's$ go (5 positions) or where the 3 $L's$ go. $$\\binom{8}{5} = \\binom{8}{3} = 56$$

$STATISTICS$
You can choose where to put the $S's$, $T's$ (from what remains), $I's$, $A$, or you can start with $10!$ and adjust for overcounting, by dividing by $3!3!2!$ to account for the fact that the $S's$ can be permuted amongst themselves, and likewise for the $T's$ and $I's$. $$\\binom{10}{3}\\binom{7}{3}\\binom{4}{2}\\binom{2}{1} = \\frac{10!}{3!3!2!} = 50400$$

#### Example 1.4.19: Binomial Theorem
The *binomial theorem* states that $$(x+y)^n = \\sum^n_{k=0}\\binom{n}{k}x^ky^{n-k}$$
for any nonnegative integer $n$. Expand out the product $$(x+y)(x+y)\\cdots(x+y)$$
The terms are obtained by picking either the $x$ or $y$ from each factor. There are $\\binom{n}{k}$ ways to choose exactly $k$ of the $x's$, and each choice yields the term $x^k y^{n-k}$.

#### Example 1.4.20: Full House in Poker
All $\\binom{52}{5}$ hands are equally via symmetry, so the naive definition applies. We need a set of 3 cards from a rank and a set of 2 cards from a rank, so we have $\\binom{4}{3}$ ways for the set of 3 cards, and $\\binom{4}{2}$ ways for the set of 2 cards. So we have: $$P(FH) = \\frac{13\\binom{4}{3}12\\binom{4}{2}}{\\binom{52}{5}} = \\frac{3744}{2598960}\\approx 0.00144$$

#### Example 1.4.21: Newton-Pepys Problem
Which of the following events has the highest probability?
- At least one 6 appears when 6 fair sided dice are rolled
  You have $6^6$ possible combinations, so we can take the complement by subtracting out the probability that no dice are sixes. $$P(S) = 1 - \\left(\\frac{5}{6}\\right)^6\\approx0.67$$
- At least two 6's appear when 12 fair sided dice are rolled
  You have $6^{12}$ possible combinations. We apply complement rule again, but must consider the case where we allow exactly one 6 to be rolled. $$P(S) = 1 - \\frac{5^{12}+\\binom{12}{1}5^{11}}{6^{12}}\\approx0.62$$
- At least three 6's appear when 18 fair dice are rolled
  You have $6^{18}$ possible combinations. Same idea as the 12 fair sided dice, where you also consider the case where two 6's are allowed. $$P(S) = 1 - \\frac{5^{18}+\\binom{18}{1}5^{17}+\\binom{18}{2}5^{16}}{6^{18}}\\approx0.60$$

#### Example 1.5.1: Choosing the Complement
$$\\binom{n}{k} = \\binom{n}{n-k}$$
Consider a committee of size $k$ in a group of $n$ people, we can either do $\\binom{n}{k}$ or we can do $\\binom{n}{n-k}$ for ways to select people who are not in the committee.

#### Example 1.5.2: The Team Captain
Suppose we want to choose a group of $k$ people from $n$ people and also select a *leader* from among them.

There are two ways to count the number of ways to do this:

- First, choose the leader (in $n$ ways), and then choose the remaining $k-1$ group members from the remaining $n-1$ people. This can be done in
  $$n \\binom{n-1}{k-1}$$
  ways.

- Alternatively, first choose all $k$ group members at once (in $\\binom{n}{k}$ ways), and then select the leader among the $k$ chosen members (in $k$ ways). This can be done in
  $$k \\binom{n}{k}$$
  ways.

Since both methods count the same quantity, then
$$n \\binom{n-1}{k-1} = k \\binom{n}{k}.$$

#### Example 1.5.3: Vandermonde's Identity
$$\\binom{m+n}{k} = \\sum_{j=0}^{k}\\binom{m}{j}\\binom{n}{k-j}$$

Suppose there are two groups:
- The first group has $m$ people.
- The second group has $n$ people.

We want to choose a total of $r$ people.

There are two ways to count this:

- Directly: choose $r$ people from all $m+n$ people:
  $$\\binom{m+n}{r}.$$

- Alternatively: for each $k$ between $0$ and $r$, choose $k$ people from the first group (in $\\binom{m}{k}$ ways) and $r-k$ people from the second group (in $\\binom{n}{r-k}$ ways).

Thus, summing over all $k$:
$$\\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}.$$

Since both methods count the same thing
$$\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}.$$

#### Example 1.5.4: Partnerships
Imagine $2n$ people. We want to pair them up into $n$ pairs.

- First, arrange all $2n$ people: $(2n)!$ ways.
- But order inside pairs doesn't matter: divide by $2^n$.
- And order of the pairs doesn't matter: divide by $n!$.

Thus, the number of ways is:
$$\\frac{(2n)!}{2^n n!}.$$

Expand $(2n)!$:
$$(2n)! = (2n)(2n-1)(2n-2)(2n-3)\\cdots 2\\cdot 1.$$

Group as:
$$= [(2n)(2n-2)\\cdots 2] \\times [(2n-1)(2n-3)\\cdots 1].$$

Note:
$$(2n)(2n-2)\\cdots 2 = 2^n n!.$$

Thus:
$$(2n)! = (2^n n!) (2n-1)(2n-3)\\cdots 1,$$

so dividing both sides:
$$\\frac{(2n)!}{2^n n!} = (2n-1)(2n-3)\\cdots 1.$$

#### Example 1.6.4: de Montmort's Matching Problem
Suppose there are $n$ letters and $n$ addressed envelopes. The letters are randomly placed into the envelopes. What is the probability that **no letter ends up in the correct envelope**?

The formula for $D_n$ is:
$$D_n = n! \\left( 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + (-1)^n \\frac{1}{n!} \\right)$$

Thus, the **probability** that no letter is in its correct envelope is:
$$P_n = \\frac{D_n}{n!} = 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\cdots + (-1)^n \\frac{1}{n!}$$

As $n$ becomes large:
$$\\lim_{n \\to \\infty} P_n = \\frac{1}{e} \\approx 0.3679$$
`;

export const blitzsteinChapter1: StudyNote = {
  id: 'blitzstein-chpt1-notes',
  title: 'Chapter 1: Probability and Counting',
  subject: 'Probability',
  date: '2025-09-24',
  content: content,
  tags: ['probability', 'blitzstein']
};
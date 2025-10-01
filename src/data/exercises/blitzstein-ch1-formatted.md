# Blitzstein Chapter 1 Exercises

## Counting

### Problem 1

How many ways are there to permute the letters in the word MISSISSIPPI?

**Solution:**
There are $11!$ ways to permute 11 letters. However, there are 4 indistinguishable $S's$, 4 indistinguishable $I's$, and 2 indistinguishable $P's$, so we must divide by those to avoid overcounting, which gives us $$\frac{11!}{4!4!2!}$$

### Problem 2

(a) How many 7-digit phone numbers are possible, assuming that the first digit can't be a 0 or a 1?

Sol:
Given the first cannot be a 0 or 1, we have 8 options, and then the remaining digits are free, so we have 10 options. $$8*10^6 = 8,000,000$$

**(b)** Re-solve (a), except now assume also that the phone number is not allowed to start with 911 (since this is reserved for emergency use, and it would not be desirable for the system to wait to see whether more digits were going to be dialed after someone has dialed 911).

**Solution:**
Now, any number who's first three digits start with 911 cannot exist, so our first three numbers are fixed to 911, and then there are 4 digits left, all with 10 options. $$8*10^6 - 10^4 = 7,990,000$$

### Problem 3

Fred is planning to go out to dinner each night of a certain week, Monday through Friday, with each dinner being at one of his ten favorite restaurants.

**(a)** How many possibilities are there for Fred's schedule of dinners for that Monday through Friday, if Fred is not willing to eat at the same restaurant more than once?

**Solution:**
This is simply sampling without replacement, so we have $n$ options for the first day, then $n-1$ options. $$n(n-1)\cdots(n-k+1)$$$$10*9*8*7*6=30,240$$

**(b)** How many possibilities are there for Fred's schedule of dinners for that Monday through Friday, if Fred is willing to eat at the same restaurant more than once, but is not willing to eat at the same place twice in a row (or more)?

**Solution:**
First we have 10 options, but then every day after, there's 9 options as  Fred can eat at a restaurant that is not the same as the previous day. $$10*9^4 = 65,610$$

### Problem 4

A round-robin tournament is being held with $n$ tennis players; this means that every player will play against every other player exactly once.

**(a)** How many possible outcomes are there for the tournament (the outcome lists out who won and who lost for each game)?

**Solution:**
First, we need to find the number of games that will happen, which is equivalent to from $n$ players, choosing any 2 players: $\binom{n}{2}$, or $\frac{n(n-1)}{2}$ . Then, we know that each pairing has either player $A$ or player $B$ win, so we have $$2^{\frac{n(n-1)}{2}}$$

**(b)** How many games are played in total?

**Solution:**
$$\binom{n}{2} = 2^{\frac{n(n-1)}{2}}$$

### Problem 5

A knock-out tournament is being held with $2^n$ tennis players. This means that for each round, the winners move on to the next round and the losers are eliminated, until only one person remains. For example, if initially there are $2^4 = 16$ players, then there are 8 games in the first round, then the 8 winners move on to round 2, then the 4 winners move on to round 3, then the 2 winners move on to round 4, the winner of which is declared the winner of the tournament. (There are various systems for determining who plays whom within a round, but these do not matter for this problem.)

**(a)** How many rounds are there?

**Solution:**
Given that we start with $2^n$ players, and each round, half of the players get knocked out, we would need $n$ rounds to reach a winner.

**(b)** Count how many games in total are played, by adding up the numbers of games played in each round.

**Solution:**
For each round, there is $2^{n-1}$ games, so in the end, we would have $$2^n-1$$

**(c)** Count how many games in total are played, this time by directly thinking about it without doing almost any calculation.

**Solution:**
Because each game eliminates one player, we would need $$2^n-1$$ to eliminate all players.

### Problem 6

There are 20 people at a chess club on a certain day. They each find opponents and start playing. How many possibilities are there for how they are matched up, assuming that in each game it does matter who has the white pieces (in a chess game, one player has the white pieces and the other player has the black pieces)?

**Solution:**
We have $20!$ ways to organize the people into their respective games, and then we end up overcounting by $10!$ as the ordering of the games does not matter. Then, if we didn't care about color, we would also divide by $2^{10}$ , but since we do, we just have $$\frac{20!}{10!}$$

### Problem 7

Two chess players, A and B, are going to play 7 games. Each game has three possible outcomes: a win for A (which is a loss for B), a draw (tie), and a loss for A (which is a win for B). A win is worth 1 point, a draw is worth 0.5 points, and a loss is worth 0 points.

**(a)** How many possible outcomes for the individual games are there, such that overall player A ends up with 3 wins, 2 draws, and 2 losses?

**Solution:**
You first select 3 wins from 7 games, then 2 draws, and the remaining two losses. $$\binom{7}{3}\binom{4}{2}\binom{2}{2} = 210$$

**(b)** How many possible outcomes for the individual games are there, such that A ends up with 4 points and B ends up with 3 points?

**Solution:**
Casework, you have these cases:
- 4 wins, 3 losses: $\binom{7}{4} = 35$
- 3 wins, 2 draws, 2 losses: $\binom{7}{3}\binom{4}{2}\binom{2}{2} = 210$
- 2 wins, 4 draws, 1 loss: $\binom{7}{2}\binom{5}{4}\binom{1}{1} = 105$
- 1 win, 6 draws: $\binom{7}{1} = 7$
Summed: 357

**(c)** Now assume that they are playing a best-of-7 match, where the match will end when either player has 4 points or when 7 games have been played, whichever is first. For example, if after 6 games the score is 4 to 2 in favor of A, then A wins the match and they don't play a 7th game. How many possible outcomes for the individual games are there, such that the match lasts for 7 games and A wins by a score of 4 to 3?

**Solution:**
The idea here is that $B$ must reach 3 points before $A$ reaches 4, meaning the last game must be an $A$ win or draw.
The following cases exist then:
- 3W,3L: $\binom{6}{3} =20$
- 2W,2D,2L: $\frac{6!}{2!2!2!} = 90$
- 2W,3D,1L: $\frac{6!}{2!3!} = 120$
- 1W,4D,1L: $\frac{6!}{4!} =30$
- 1W,5D: $\frac{6!}{5!} =6$
- 6D: $\frac{6!}{6!} =1$
Summed: 267

### Problem 8

(a) How many ways are there to split a dozen people into 3 teams, where one team has 2 people, and the other two teams have 5 people each?

Sol:
You choose 5 from 12 for the first team, then 5 from 7, and then the remaining two form the last team. $$\binom{12}{5}\binom{7}{5}$$

**(b)** How many ways are there to split a dozen people into 3 teams, where each team has 4 people?

**Solution:**
We choose the first group of 4 from 12, then the second group of 4 from 8, then the remainder make the third team. $$\binom{12}{4}\binom{8}{4}$$

### Problem 9

(a) How many paths are there from the point (0, 0) to the point (110, 111) in the plane such that each step either consists of going one unit up or one unit to the right?

Sol:
We will need to take a total of 221 steps, so we can either choose to make 110 horizontal steps from the start. $$\binom{221}{110}$$

**(b)** How many paths are there from (0, 0) to (210, 211), where each step consists of going one unit up or one unit to the right, and the path has to go through (110, 111)?

**Solution:**
In this case, we can have the initial travel from 9a, so we have $\binom{221}{110}$, and then from here, we have another 200 steps, of which we will choose 100 steps to go horizontal, so we have $$\binom{221}{110}\binom{200}{100}$$

### Problem 10

To fulfill the requirements for a certain degree, a student can choose to take any 7 out of a list of 20 courses, with the constraint that at least 1 of the 7 courses must be a statistics course. Suppose that 5 of the 20 courses are statistics courses.

**(a)** How many choices are there for which 7 courses to take?

**Solution:**
In this case, it is easier to take the complement, where we take 0 statistics courses, we would have $\binom{15}{7}$, so our final solution would be $$\binom{20}{7} - \binom{15}{7}$$

**(b)** Explain intuitively why the answer to (a) is not $\binom{5}{1} \cdot \binom{19}{6}$.
It is not simply the above given that that only selects for **one** statistics course, while the student can choose to take more than one stats course.

### Problem 11

Let $A$ and $B$ be sets with $|A| = n$, $|B| = m$.

**(a)** How many functions are there from $A$ to $B$ (i.e., functions with domain $A$, assigning an element of $B$ to each element of $A$)?

**Solution:**
For each element $a_i \in A$ , you have $m$ choices, so you will have $$m^n$$

**(b)** How many one-to-one functions are there from $A$ to $B$? (See Section A.2.1 of the math appendix for information about one-to-one functions.)

**Solution:**
The mapping between $A \rightarrow B$ and $B \rightarrow A$ must be unique, so we have $m$ options for $a_1$, and then $a_n$ = $m-(n-1) = m-n+1$ for cases where $m\geq n$ else 0.

### Problem 12

Four players, named A, B, C, and D, are playing a card game. A standard, well-shuffled deck of cards is dealt to the players (so each player receives a 13-card hand).

**(a)** How many possibilities are there for the hand that player A will get? (Within a hand, the order in which cards were received doesn't matter.)

**Solution:**
Simply are you selecting 13 cards from 52. $$\binom{52}{13} = 635,013,559,600$$

**(b)** How many possibilities are there overall for what hands everyone will get, assuming that it matters which player gets which hand, but not the order of cards within a hand?

**Solution:**
You are selecting without replacement, therefore you have $$\binom{52}{13}\binom{39}{13}\binom{26}{13}\approx 5.36*10^{28}$$

**(c)** Explain intuitively why the answer to Part (b) is not the fourth power of the answer to Part (a).
It isn't because we are not replacing the cards, so the pile we are selecting from decreases.

### Problem 13

A certain casino uses 10 standard decks of cards mixed together into one big deck, which we will call a superdeck. Thus, the superdeck has $52 \cdot 10 = 520$ cards, with 10 copies of each card. How many different 10-card hands can be dealt from the superdeck? The order of the cards does not matter, nor does it matter which of the original 10 decks the cards came from. Express your answer as a binomial coefficient.

**Solution:**
This is stars and bars, where we have 52 cards + 10 in a hand - 1 for the total of 61, and we choose 10. $$\binom{61}{10}$$

### Problem 14

You are ordering two pizzas. A pizza can be small, medium, large, or extra large, with any combination of 8 possible toppings (getting no toppings is allowed, as is getting all 8). How many possibilities are there for your two pizzas?

**Solution:**
We have 4 options for pizzas, and then we have $2^8$ options for toppings. Then, we have a total of 1024 choices, and are looking to get 2, which means this is actually a stars and bars, giving us 1024+2-1 choose 2: $$\binom{1025}{2}$$

## Story proofs

### Problem 15

Give a story proof that $\sum_{k=0}^{n} \binom{n}{k} = 2^n$.

**Solution:**
Count by how many 1s each $n$-bit binary string has - there are $\binom{n}{k}$ strings with exactly $k$ ones (choosing $k$ positions out of $n$ to be 1). Summing over all possible values of $k$ from 0 to $n$ gives $\sum_{k=0}^{n} \binom{n}{k}$.

### Problem 16

Show that for all positive integers $n$ and $k$ with $n \geq k$,

$$\binom{n}{k} + \binom{n}{k-1} = \binom{n+1}{k},$$

doing this in two ways: (a) algebraically

Sol:
$$
\begin{aligned}
\binom{n}{k} + \binom{n}{k-1} &= \binom{n+1}{k} \\ \\
\frac{n!}{k!(n-k)!} + \frac{n!}{(k-1)!(n-k+1)!} &= \frac{(n+1)!}{k!(n-k+1)!} \\ \\
\end{aligned}
$$
since the LHS LCD is $k!(n-k+1)!, we want to multiply $\frac{n!}{k!(n-k)!}$ by $n-k+1$  and the right hand side by $k$
$$
\begin{aligned}
\frac{n!(n-k+1)}{k!(n-k)!(n-k+1)} + \frac{n!k}{k(k-1)!(n-k+1)!} &= \frac{(n+1)!}{k!(n-k+1)!}\\ \\
\frac{n!(n-k+1)}{k!(n-k+1)!} + \frac{n!k}{k!(n-k+1)!} &= \frac{(n+1)!}{k!(n-k+1)!} \\
\\
\frac{n!k + n!(n-k+1)}{k!(n-k+1)!} &= \frac{(n+1)!}{k!(n-k+1)!} \\\\
\frac{n!(k+[n-k+1])}{k!(n-k+1)!} &= \frac{(n+1)!}{k!(n-k+1)!} \\ \\
\frac{n!(n+1)}{k!(n-k+1)!} &= \frac{(n+1)!}{k!(n-k+1)!} \\ \\
\frac{(n+1)!}{k!(n-k+1)!} &= \frac{(n+1)!}{k!(n-k+1)!}
\end{aligned}
$$

**(b)** with a story, giving an interpretation for why both sides count the same thing.

**Solution:**
RHS is simply selecting $k$ people from $n+1$ group.
LHS, let's focus on one person, either the person is in the group or they are not.
- Person is in the committee, you have $$\binom{n}{k}$$
- Person is not in the committee, you have $$\binom{n}{k-1}$$

### Problem 17

Give a story proof that

$$\sum_{k=0}^{n} \binom{n}{k}^2 = \binom{2n}{n},$$

for all positive integers $n$.

**Solution:**
Consider two classes, each with $n$ students. You want to select exactly $n$ students total from both classes combined.
RHS: Choose $n$ students from the $2n$ total students
LHS:
- Choose $k$ students from the first class, and $n-k$ students from the second class, by symmetry, we have $\binom{n}{k}\binom{n}{n-k} = \binom{n}{k}^2$
- Sum across all $k$ : $\sum_{k=0}^n$

### Problem 18

Give a story proof that

$$\sum_{k=1}^{n} k\binom{n}{k}^2 = n\binom{2n-1}{n-1},$$

for all positive integers $n$.

**Solution:**
Consider two classes, each with $n$ students. You want to select exactly $n$ students total from both classes combined **and choose one of them as team captain**.

RHS: Choose the captain first from the first class ($n$ options), then choose the remaining $n-1$ students from the remaining $2n-1$ students: $n\binom{2n-1}{n-1}$ ways.
LHS:
- Choose $k$ students from the first class and $n-k$ students from the second class: $\binom{n}{k}\binom{n}{n-k} = \binom{n}{k}^2$ ways
- Choose the captain from the $k$ students selected from the first class: $k$ ways
- This gives $k\binom{n}{k}^2$ ways for each value of $k$
- Sum across all $k$: $\sum_{k=1}^{n} k\binom{n}{k}^2$

### Problem 19

Give a story proof that

$$\sum_{k=2}^{n} \binom{k}{2}\binom{n-k+2}{2} = \binom{n+3}{5},$$
for all integers $n \geq 2$.

**Solution:**
consider a class with $n+3$ students
RHS: you choose 5 from the students
LHS: let $m = k + 1$ as the center, then there is exactly $k$ students below the center, and there is $n-k+2$ students above. Then we choose 2 from both, and multiply them, and then implicitly you have 5 selected students, as you chose where to center on.

### Problem 20

(a) Show using a story proof that

$$\binom{k}{k} + \binom{k+1}{k} + \binom{k+2}{k} + \cdots + \binom{n}{k} = \binom{n+1}{k+1},$$

where $n$ and  are positive integers with $n \geq k$. This is called the hockey stick identity.
Consider a group of $n+1$ people 0-indexed.
RHS: You choose $k+1$ people where someone is the leader.
LHS: Consider who the leader is, if $k$ is the leader, we will need $k$ more people to complete the group.
- $k$ is leader, then we need $k$ more from $0$ to $k-1$
- if $k+1$ is the leader, then we choose $k$ from $0$ to $k$ $\rightarrow$ $\binom{k+1}{k}$ ways
- if $k+2$ is the leader, then we choose people from $0$ to $k+1 \rightarrow \binom{k+2}{k}$ waysetc.
- if $n$ is the leader, then you choose $k$ from $0$ to $n-1$, where there is $\binom{n}{k}$ ways
for each case, they are mutually exclusive, so we are allowed to sum them together. (Basically the idea is we pick which person is leader first, instead of picking group and then leader)

**(b)** Suppose that a large pack of Haribo gummi bears can have anywhere between 30 and 50 gummi bears. There are 5 delicious flavors: pineapple (clear), raspberry (red), orange (orange), strawberry (green, mysteriously), and lemon (yellow). There are 0 non-delicious flavors. How many possibilities are there for the composition of such a pack of gummi bears? You can leave your answer in terms of a couple binomial coefficients, but not a sum of lots of binomial coefficients.

**Solution:**
We can use stars and bars, and at 50 gummies, and substract out the case where we have less than 30 gummies. We have 5 flavors, so $\binom{50+5-1}{5-1}$, and for the less than 30 case, we have $\binom{29+5-1}{5-1}$, so we have: $$\binom{54}{4} - \binom{33}{4}$$

### Problem 21

Define $\{\begin{matrix} n \ k \end{matrix}\}$ as the number of ways to partition ${1, 2, ..., n}$ into $k$ nonempty subsets, or the number of ways to have $n$ students split up into $k$ groups such that each group has at least one student. For example, $\left\{\begin{matrix} 4 \\ 2 \end{matrix}\right\} = 7$ because we have the following possibilities.

$\{1\}, \{2, 3, 4\} \bullet \{2\}, \{1, 3, 4\} \bullet \{3\}, \{1, 2, 4\} \bullet \{4\}, \{1, 2, 3\} \bullet \{1, 2\}, \{3, 4\} \bullet \{1, 3\}, \{2, 4\} \bullet \{1, 4\}, \{2, 3\}$

Prove the following identities:

**(a)** $$\left\{\begin{matrix} n+1 \\ k \end{matrix}\right\} = \left\{\begin{matrix} n \\ k-1 \end{matrix}\right\} + k\left\{\begin{matrix} n \\ k \end{matrix}\right\}$$

**Solution:**
Proof:
Let us consider the $n+1$ element. There are two cases for this, case 1: it becomes it's own subset, or case 2: it joins one of the existing subsets.
- Case 1: it becomes it's own subset, then we need to partition the remaining elements $\left\{1,2,\cdots,n\right\}$ into $k-1$ nonempty subsets, which is notated by $\left\{\begin{matrix} n \\ k-1 \end{matrix}\right\}$
- Case 2: it joins one of the existing subsets
		We would first partition $\left\{1,2,\cdots,n\right\}$ into $k$ subsets, which is $\left\{\begin{matrix} n \\ k \end{matrix}\right\}$
		Then, you choose which subset to add the $n+1$ element, which we have $k$ choices.
These two cases are mutually exclusive, therefore we can sum them together.

**(b)** $$\sum_{j=k}^{n} \binom{n}{j}\left\{\begin{matrix} j \\ k \end{matrix}\right\} = \left\{\begin{matrix} n+1 \\ k+1 \end{matrix}\right\}$$

**Solution:**
Proof:
Partition the set ${0,1,2,\dots,n}$ into $k+1$ nonempty subsets. Consider the block that contains the special element $0$ (the VIP). There are two steps to consider:
* Choose the other guests not with $0$:
	Suppose exactly $j$ of the ordinary guests are seated away from $0$.
* There are $\binom{n}{j}$ ways to choose this set $U \subseteq [n]$ of size $j$.
* Partition those $j$ guests:

These $j$ guests must form the $k$ non-VIP tables, i.e. a partition of $U$ into $k$ nonempty blocks.
	 $$\left\{\begin{matrix} j \\ k \end{matrix}\right\}$$
* Now we form the VIP block

	The remaining $n-j$ guests automatically join $0$ in the VIP’s block, which is always valid since it contains $0$.
Therefore, for each fixed $j$, the number of valid partitions is
$$\binom{n}{j}\left\{\begin{matrix} j \\ k \end{matrix}\right\}$$

Since $j$ can range from $k$ up to $n$, summing gives
$$\sum_{j=k}^{n} \binom{n}{j}\left\{\begin{matrix} j \\ k \end{matrix}\right\}$$

### Problem 22

The Dutch mathematician R.J. Stroeker remarked:

Every beginning student of number theory surely must have marveled at the miraculous fact that for each natural number $n$ the sum of the first $n$ positive consecutive cubes is a perfect square. [26]

Furthermore, it is the square of the sum of the first $n$ positive integers! That is,

$$1^3 + 2^3 + \cdots + n^3 = (1 + 2 + \cdots + n)^2.$$

Usually this identity is proven by induction, but that does not give much insight into why the result is true, nor does it help much if we wanted to compute the left-hand side but didn't already know this result. In this problem, you will give a story proof of the identity.

**(a)** Give a story proof of the identity

$$1 + 2 + \cdots + n = \binom{n+1}{2}.$$

**Solution:**
Consider building up a round-robin tournament by adding players one at a time:

- Start with 1 player: 0 games needed
- Add the 2nd player: The new player must play 1 game (against the existing player)
- Add the 3rd player: The new player must play 2 games (against the 2 existing players)
- Add the $(n+1)$th player: The new player must play $n$ games (against the $n$ existing players)

So the total number of games when we have $n+1$ players is: $$1 + 2 + 3 + \cdots + n$$
But we also know that in a complete round-robin tournament with $n+1$ players, the total number of games is $\binom{n+1}{2}$ (choosing 2 players from $n+1$ to form each game).
Therefore: $$1 + 2 + 3 + \cdots + n = \binom{n+1}{2}$$

**(b)** Give a story proof of the identity

$$1^3 + 2^3 + \cdots + n^3 = 6\binom{n+1}{4} + 6\binom{n+1}{3} + \binom{n+1}{2}.$$

It is then just basic algebra (not required for this problem) to check that the square of the right-hand side in (a) is the right-hand side in (b).

Hint: Imagine choosing a number between 1 and $n$ and then choosing 3 numbers between 0 and $n$ smaller than the original number, with replacement. Then consider cases based on how many distinct numbers were chosen.

## Naive definition of probability

### Problem 23

Three people get into an empty elevator at the first floor of a building that has 10 floors. Each presses the button for their desired floor (unless one of the others has already pressed that button). Assume that they are equally likely to want to go to floors 2 through 10 (independently of each other). What is the probability that the buttons for 3 consecutive floors are pressed?

**Solution:**
There's 7 ways to have consecutive floors, $(2,3,4) - (8,9,10)$ and within each way, there is $3!$ orders. There is $9^3$ arrangements, so we have $$\frac{7*3!}{9^3} = \frac{42}{729} = \frac{14}{243}$$

### Problem 24

A certain family has 6 children, consisting of 3 boys and 3 girls. Assuming that all birth orders are equally likely, what is the probability that the 3 eldest children are the 3 girls?

**Solution:**
Total of $6!$ arrangements. We need all cases of $BBB,GGG$ , so we have $3!$ ways to arrange the boys, and $3!$ ways to arrange the girls, giving us $$\frac{3!3!}{6!} = \frac{1}{20}$$

### Problem 25

A city with 6 districts has 6 robberies in a particular week. Assume the robberies are located randomly, with all possibilities for which robbery occurred where equally likely. What is the probability that some district had more than 1 robbery?

**Solution:**
Take the complement of no overlap $$1 - \frac{5}{6}*\frac{4}{5}*\frac{3}{4}*\frac{2}{3}*\frac{1}{2} = \frac{6!}{6^6}$$

### Problem 26

A survey is being conducted in a city with 1 million residents. It would be far too expensive to survey all of the residents, so a random sample of size 1000 is chosen (in practice, there are many challenges with sampling, such as obtaining a complete list of everyone in the city, and dealing with people who refuse to participate). The survey is conducted by choosing people one at a time, with replacement and with equal probabilities.

**(a)** Explain how sampling with vs. without replacement here relates to the birthday problem.

**Solution:**
Sampling with replacement is exactly like the birthday problem, where you're looking to avoid 'collisions', where the same person gets picked twice (so like the same birthday getting picked twice).

**(b)** Find the probability that at least one person will get chosen more than once.

**Solution:**
Take complement **$$P(\text{at least one repeat}) = 1 - \prod_{i=0}^{999} \left(1 - \frac{i}{1{,}000{,}000}\right)$$

### Problem 27

A hash table is a commonly used data structure in computer science, allowing for fast information retrieval. For example, suppose we want to store some people's phone numbers. Assume that no two of the people have the same name. For each name $x$, a hash function $h$ is used, letting $h(x)$ be the location that will be used to store $x$'s phone number. After such a table has been computed, to look up $x$'s phone number one just recomputes $h(x)$ and then looks up what is stored in that location.

The hash function $h$ is deterministic, since we don't want to get different results every time we compute $h(x)$. But $h$ is often chosen to be pseudorandom. For this problem, assume that true randomness is used. Let there be $k$ people, with each person's phone number stored in a random location (with equal probabilities for each location, independently of where the other people's numbers are stored), represented by an integer between 1 and $n$. Find the probability that at least one location has more than one phone number stored there.

**Solution:**
Same exact idea as the birthday problem, looking for collisions, taking the complement of no collisions
$$P(\text{collision}) = 1 - \Pi^{k-1}_{i=0}\frac{n-1}{n}$$

### Problem 28

A college has 10 time slots for its courses, and blithely assigns courses to completely random time slots, independently. The college offers exactly 3 statistics courses. What is the probability that 2 or more of the statistics courses are in the same time slot?

**Solution:**
Take complement of no collisions $$P(\text{collision}) = \frac{10*9*8}{10^3} = 0.28$$

### Problem 29

For each part, decide whether the blank should be filled in with =, <, or >, and give a clear explanation.

**(a)** (probability that the total after rolling 4 fair dice is 21) _____ (probability that the total after rolling 4 fair dice is 22)

**Solution:**
$21 > 22$, since 21 has 3 combos $(6,6,6,3), (6,6,5,4), (6,5,5,5)$ while 22 only has 2, $(6,6,6,4), (6,6,,5,5)$

**(b)** (probability that a random 2-letter word is a palindrome³) _____ (probability that a random 3-letter word is a palindrome)

**Solution:**
The middle letter does not matter, as it can be any letter.
2 letters: $$\frac{26}{26^2} = \frac{1}{26}$$
3 letters: $$\frac{26*26}{26^3}=\frac{1}{26}$$

### Problem 30

With definitions as in the previous problem, find the probability that a random $n$-letter word is a palindrome for $n = 7$ and for $n = 8$.

**Solution:**
$n = 7$ : $$\frac{26^4}{26^7}$$
$n = 8$: $$\frac{26^4}{26^8}$$

### Problem 31

Elk dwell in a certain forest. There are $N$ elk, of which a simple random sample of size $n$ are captured and tagged ("simple random sample" means that all $\binom{N}{n}$ sets of $n$ elk are equally likely). The captured elk are returned to the population, and then a new sample is drawn, this time with size $m$. This is an important method that is widely used in ecology, known as capture-recapture. What is the probability that exactly $k$ of the $m$ elk in the new sample were previously tagged? (Assume that an elk that was captured before doesn't become more or less likely to be captured again.)

**Solution:**
We want to choose exactly the $k$ tagged elk first $\binom{n}{k}$. Then we want to complete our sample of $m-k$ untagged elk, coming from $N-n$ untagged elk, giving $\binom{N-n}{m-k}$ , then gives us $$\frac{\binom{n}{k}\binom{N-n}{m-k}}{\binom{N}{m}}$$

### Problem 32

Four cards are face down on a table. You are told that two are red and two are black, and you need to guess which two are red and which two are black. You do this by pointing to the two cards you're guessing are red (and then implicitly you're guessing that the other two are black). Assume that all configurations are equally likely, and that you do not have psychic powers. Find the probability that exactly $j$ of your guesses are correct, for $j = 0, 1, 2, 3, 4$.

**Solution:**
There is $\binom{4}{2}$ ways to arrange 2 reds. We have $\binom{2}{r}$ where $r$ are the reds, to select the correct reds. and by symmetry, we have $\binom{2}{2-r}$ to select the number of black cards. Then we have $$\frac{\binom{2}{r}\binom{2}{2-r}}{\binom{4}{2}}$$
and we have for $P(j=1) = P(j=3) = 0$ since by symmetry the only corrects must be even.
$P(j= 0) = \frac{1}{6}$
$P(j = 2) = \frac{4}{6}$
$P(j = 4) = \frac{1}{6}$

### Problem 33

A jar contains $r$ red balls and $g$ green balls, where $r$ and $g$ are fixed positive integers. A ball is drawn from the jar randomly (with all possibilities equally likely), and then a second ball is drawn randomly.

**(a)** Explain intuitively why the probability of the second ball being green is the same as the probability of the first ball being green.

**Solution:**
The probability is the same because before any draws occur, there's perfect symmetry between the first and second positions - nothing distinguishes one draw from the other, so green balls are equally likely to appear in either position.

**(b)** Define notation for the sample space of the problem, and use this to compute the probabilities from (a) and show that they are the same.

Sample Space: $S = \{(i,j) : i, j \in \{1,2,\cdots, r+g\}, i \neq j$ , where balls $1$ to $g$ are green, and $g+1$ to $r+g$ are red.
Then, first green
$$P(\text{green first}) = \frac{|{(i, j): i \leq g, j \neq i}|}{|S|} = \frac{g(r+g-1)}{(r+g)(r+g-1)} = \frac{g}{r+g}$$

Second green
$$P(\text{green second}) = \frac{|{(i, j): j \leq g, i \neq j}|}{|S|} = \frac{g(r+g-1)}{(r+g)(r+g-1)} = \frac{g}{r+g}$$

**(c)** Suppose that there are 16 balls in total, and that the probability that the two balls are the same color is the same as the probability that they are different colors. What are $r$ and $g$ (list all possibilities)?

**Solution:**
$P(\text{Same}) = P(\text{Diff})$

Both green: $\frac{g}{16}*\frac{g-1}{15}$
Both red: $\frac{r}{16}*\frac{r-1}{15}$

$$P(\text{same}) = \frac{r(r-1)+g(g-1)}{240} = P(\text{diff}) = \frac{1}{2}$$ Some math later:
$(10,6), (6,10)$

### Problem 34

A random 5-card poker hand is dealt from a standard deck of cards. Find the probability of each of the following possibilities (in terms of binomial coefficients).

**(a)** A flush (all 5 cards being of the same suit; do not count a royal flush, which is a flush with an ace, king, queen, jack, and 10).

**Solution:**
Choose a suit $\binom{4}{1}$
Choose five cards from suit $\binom{13}{5}$
Overcounted the royals, so subtract 4 $$\binom{4}{1}\binom{13}{5} - 4$$

**(b)** Two pair (e.g., two 3's, two 7's, and an ace).

**Solution:**
Need two sets of 2: $\binom{4}{2}^2$
Pick two ranks for pairs: $\binom{13}{2}$
Remaining card available: $44$ $$\binom{13}{2}\binom{4}{2}^2*44$$

### Problem 35

A random 13-card hand is dealt from a standard deck of cards. What is the probability that the hand contains at least 3 cards of every suit?

**Solution:**
You will have one suit that has 4 cards: $\binom{13}{4}$ , and the remaining 3 suits will have 3 cards: $\binom{13}{3}$, and there's 4 suits, so multiply by 4 $$4*\binom{13}{4}\binom{13}{3}^3$$

### Problem 36

A group of 30 dice are thrown. What is the probability that 5 of each of the values 1, 2, 3, 4, 5, 6 appear?

**Solution:**
Pick 5 spaces for each $$P=\frac{\binom{30}{5}\binom{25}{5}\binom{20}{5}\binom{15}{5}\binom{10}{5}}{6^{30}}$$

### Problem 37

A deck of cards is shuffled well. The cards are dealt one by one, until the first time an ace appears.

**(a)** Find the probability that no kings, queens, or jacks appear before the first ace.

**Solution:**
We can ignore all other cards except for $K,Q,J$, and since we must have the $A$ appear first. By symmetry, all are equally likely to appear first, so we have $\frac{1}{4}$ for the $A$ to appear first.

**(b)** Find the probability that exactly one king, exactly one queen, and exactly one jack appear (in any order) before the first ace.

**Solution:**
Ignore all other cards still. We have $\binom{4}{1}^3$ for choosing one $K,Q,J$, and $\frac{1}{4}$ for the $A$ coming last, out of a total of $4^4$ combos, so we have $\frac{1}{16}$

### Problem 38

Tyrion, Cersei, and ten other people are sitting at a round table, with their seating arrangement having been randomly assigned. What is the probability that Tyrion and Cersei are sitting next to each other? Find this in two ways:

**(a)** using a sample space of size 12!, where an outcome is fully detailed about the seating;

**Solution:**
Tyrion can sit in any of the seats, $12$
Cersei must be next to Tyrion, so $2$
Everyone else: $10!$
$$\frac{10!*2*24}{12!}$$

**(b)** using a much smaller sample space, which focuses on Tyrion and Cersei.

**Solution:**
Cersei has a $\frac{2}{11}$ since these are the only 2 seats adjacent to Tyrion.

### Problem 39

An organization with $2n$ people consists of $n$ married couples. A committee of size $k$ is selected, with all possibilities equally likely. Find the probability that there are exactly $j$ married couples within the committee.

**Solution:**
We first want to choose $j$ couples, so we have $\binom{n}{j}$ . The total combos is $\binom{2n}{k}$ . We now want to choose $k-2j$ remaining people from $n-j$ pairs of couples, where we want only one person from the couples to avoid going past $j$ , which gives us $\binom{n-j}{k-2j}*2^{k-2j}$ $$\frac{\binom{n}{j}\binom{n-j}{k-2j}2^{k-2j}}{\binom{2n}{k}}$$

### Problem 40

There are $n$ balls in a jar, labeled with the numbers $1, 2, ..., n$. A total of $k$ balls are drawn, one by one with replacement, to obtain a sequence of numbers.

**(a)** What is the probability that the sequence obtained is strictly increasing?

**Solution:**
equivalent to drawing 3 balls and sorting, so we have $$\frac{\binom{n}{k}}{n^k}$$

**(b)** What is the probability that the sequence obtained is increasing (but not necessarily strictly increasing, i.e., there can be repetitions)?

**Solution:**
Stars and bars, since we now have $k$ balls into $n$ distinct buckets, as you can have more than one ball in one bucket (when ball $i$ = $k$). $$\frac{\binom{n+k-1}{k}}{n^k}$$

### Problem 41

Each of $n$ balls is independently placed into one of $n$ boxes, with all boxes equally likely. What is the probability that exactly one box is empty?

**Solution:**
You have $n^n$ total outcomes. This also means that we have exactly one box with two items $\rightarrow$ $\binom{n}{2}$ . Then the rest is just $(n-1)!$ , so we have $$\frac{\binom{n}{2}(n-1)!}{n^n}$$

### Problem 42

A norepeatword is a sequence of at least one (and possibly all) of the usual 26 letters a,b,c,...,z, with repetitions not allowed. For example, "course" is a norepeatword, but "statistics" is not. Order matters, e.g., "course" is not the same as "source".

A norepeatword is chosen randomly, with all norepeatwords equally likely. Show that the probability that it uses all 26 letters is very close to $1/e$.

**Solution:**
First, we want to figure out number of all non-repeat words, which is just the permutation formula. $$\sum_{k=1}^{26}\frac{26!}{(26-k)!}$$
Now we want our numerator, which is just $26!$, to use all 26 letters.
$$\frac{26!}{\sum_{k=1}^{26}\frac{26!}{(26-k)!}}$$
We can factor out the $26!$
$$\frac{1}{\sum_{k=1}^{26}\frac{1}{(26-k)!}}$$
Let $j = 26-k$, which will be from $0 \leq j \leq 25$ , so we have
$$\frac{1}{\sum_{j=0}^{25}\frac{1}{(j)!}}$$
where this is the Maclaurin series for $e^x$ at $x = 1$ $$e^x = \sum^\infty_{n=0}\frac{x^n}{n!} = 1 + x + \frac{x^2}{2!}+\frac{x^3}{3!}\cdots$$
which converges to $e$ , giving us $\frac{1}{e}$

## Axioms of probability

### Problem 43

Show that for any events $A$ and $B$,

$$P(A) + P(B) - 1 \leq P(A \cap B) \leq P(A \cup B) \leq P(A) + P(B).$$

For each of these three inequalities, give a simple criterion for when the inequality is actually an equality (e.g., give a simple condition such that $P(A \cap B) = P(A \cup B)$ if and only if the condition holds).

**Solution:**
$P(A) + P(B) - 1 \leq P(A \cap B)$: also Bonferroni's Inequality
$$\begin{aligned}
P(A\cup B) &= P(A) + P(B) - P(A\cap B) \\ \\

\end{aligned}$$
And since $P(A \cup B) \leq 1$ by definition of probabilities
$$\begin{aligned}
P(A).+ P(B) - P(A\cap B) &\leq 1 \\ \\
P(A) + P(B) -1 &\leq P(A \cap B)
\end{aligned}
$$
And strict equality happens when $P(A \cup B) = 1$

$P(A \cap B) \leq P(A \cup B)$
$A \cap B \subseteq A \cup B$ , then by monotonicity $$P(A\cap B) \leq P(A \cup B)$$
And strict equality happens $A\cap B \iff A \cup B$ only where $A = B$

$P(A \cup B) \leq P(A) + P(B)$
$P(A \cup B) = P(A) + P(B) - P(A\cap B)$
Since $P(A\cap B) \geq 0$
$$P(A \cup B) = P(A) + P(B) - P(A \cap B) \leq P(A) + P(B)$$ Equality only exists IFF $A$ and $B$ are disjoint.

### Problem 44

Let $A$ and $B$ be events. The difference $B - A$ is defined to be the set of all elements of $B$ that are not in $A$. Show that if $A \subseteq B$, then

$$P(B - A) = P(B) - P(A),$$

directly using the axioms of probability.

**Solution:**
Given $A \subseteq B$, $B$ can be written as the union of two disjoint sets $$B = A \cup (B-A)$$ By Axiom 3, we have $P(A \cup B) = P(A) + P(B)$ if $A, B$ are disjoint.
Since $B = A \cup (B-A)$ , we have
$$\begin{aligned}
P(B) = P(A \cup (B -A)) &= P(A) + P(B-A) \\ \\
\text{solve for }& P(B-A) \\ \\
P(B - A) &= P(B) - P(A)
\end{aligned}$$

### Problem 45

Let $A$ and $B$ be events. The symmetric difference $A \triangle B$ is defined to be the set of all elements that are in $A$ or $B$ but not both. In logic and engineering, this event is also called the XOR (exclusive or) of $A$ and $B$. Show that

$$P(A \triangle B) = P(A) + P(B) - 2P(A \cap B),$$

directly using the axioms of probability.

**Solution:**
$A\triangle B = (A-B)\cup (B-A)$
So only elements in $A$ but not in $B$ , and elements in $B$ but not in $A$.
The $(A-B), (B-A)$ are disjoint as it is not possible for any element to be in both $A$ and not $B$ and $B$ and not $A$ at the same time.

$$
\begin{align}
A \triangle B &= (A - B) \cup (B - A) \\ \\
(A - B) \cap (B - A) &= \emptyset \\ \\
P(A \triangle B) &= P((A - B) \cup (B - A)) \\ \\
&= P(A - B) + P(B - A) \\ \\
P(A) &= P(A \cap B) + P(A - B) \\ \\
P(A - B) &= P(A) - P(A \cap B) \\ \\
P(B) &= P(A \cap B) + P(B - A) \\ \\
P(B - A) &= P(B) - P(A \cap B) \\ \\
P(A \triangle B) &= P(A - B) + P(B - A) \\ \\
&= [P(A) - P(A \cap B)] + [P(B) - P(A \cap B)] \\ \\
&= P(A) + P(B) - 2P(A \cap B)
\end{align}
$$

### Problem 46

Let $A_1, A_2, ..., A_n$ be events. Let $B_k$ be the event exactly $k$ of the $A_i$ occur, and $C_k$ be the event that at least $k$ of the $A_i$ occur, for $0 \leq k \leq n$. Find a simple expression for $P(B_k)$ in terms of $P(C_k)$ and $P(C_{k+1})$.

**Solution:**
$C_k$ is the event that at least $k$ events happen: $$C_k = B_k \cup B_{k+1} \cup B_{k+2} \cup\cdots\cup B_n$$
 $C_{k+1}$ is the event that at least $k+1$ events happen: $$C_{k+1} = B_{k+1} \cup B_{k+2} \cup \cdots \cup B_n$$
 Since $B_j$ are mutually distinct
$$\begin{align} P(C_k) &= P(B_k \cup B_{k+1} \cup \cdots \cup B_n) \\ \\ &= P(B_k) + P(B_{k+1}) + \cdots + P(B_n) \\ \\ &= P(B_k) + P(B_{k+1} \cup B_{k+2} \cup \cdots \cup B_n) \\ \\ &= P(B_k) + P(C_{k+1}) \end{align}$$
Solve for $B_k$ $$P(B_k) = P(C_k) - P(C_{k+1})$$

### Problem 47

Events $A$ and $B$ are independent if $P(A \cap B) = P(A)P(B)$ (independence is explored in detail in the next chapter).

**(a)** Give an example of independent events $A$ and $B$ in a finite sample space $S$ (with neither equal to $\emptyset$ or $S$)

**Solution:**
$S = \{1,2,3,4\}$ uniform
$A = {1,2}$
$B = 1,3$
$$\begin{align} P(A) &= P({1, 2}) = \frac{2}{4} = \frac{1}{2} \\ P(B) &= P({1, 3}) = \frac{2}{4} = \frac{1}{2} \\ A \cap B &= {1, 2} \cap {1, 3} = {1} \\ P(A \cap B) &= P({1}) = \frac{1}{4} \\ P(A) \cdot P(B) &= \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4} \end{align}$$

**(b)** Consider the experiment of picking a random point in the rectangle

$$R = {(x, y) : 0 < x < 1, 0 < y < 1},$$

where the probability of the point being in any particular region contained within $R$ is the area of that region. Let $A_1$ and $B_1$ be rectangles contained within $R$, with areas not equal to 0 or 1. Let $A$ be the event that the random point is in $A_1$, and $B$ be the event that the random point is in $B_1$. Give a geometric description of when it is true that $A$ and $B$ are independent. Also, give an example where they are independent and another example where they are not independent.

**Solution:**
$A$ and $B$ are independent IFF $A$$ and $B$ can be expressed as products of intervals $$A = I_A*J_A, \text{ where } I_A \subseteq (0,1) \text{ and }  J_A \subseteq(0,1)$$
$$B = I_B*J_B, \text{ where } I_J \subseteq (0,1) \text{ and }J_B \subseteq(0,1)$$

$$\begin{align} P(A) &= \text{area}(A_1) = |I_1| \cdot |J_1| \\ \\ P(B) &= \text{area}(B_1) = |I_2| \cdot |J_2| \\ \\ P(A \cap B) &= \text{area}(A_1 \cap B_1) = \text{area}((I_1 \cap I_2) \times (J_1 \cap J_2)) \\ \\ &= |I_1 \cap I_2| \cdot |J_1 \cap J_2| = |I_1||I_2| \cdot |J_1||J_2| = P(A)P(B) \end{align}$$

Independent:
$A = (0, 0.3) * (0,1), B = (0,1) * (0,0.4)$
Dependent:
$A = (0.1, 0.9) * (0.4, 0.6), B = (0.4, 0.7) * (0.3, 0.8)$

**(c)** Show that if $A$ and $aB$ are independent, then

$$P(A \cup B) = P(A) + P(B) - P(A)P(B) = 1 - P(A^c)P(B^c).$$

### Problem 48

Arby has a belief system assigning a number $P_{Arby}(A)$ between 0 and 1 to every event $A$ (for some sample space). This represents Arby's degree of belief about how likely $A$ is to occur. For any event $A$, Arby is willing to pay a price of $1000 \cdot P_{Arby}(A)$ dollars to buy a certificate such as the one shown below:

**Certificate**

The owner of this certificate can redeem it for $1000 if $A$ occurs. No value if $A$ does not occur, except as required by federal, state, or local law. No expiration date.

Likewise, Arby is willing to sell such a certificate at the same price. Indeed, Arby is willing to buy or sell any number of certificates at this price, as Arby considers it the "fair" price.

Arby stubbornly refuses to accept the axioms of probability. In particular, suppose that there are two disjoint events $A$ and $B$ with

$$P_{Arby}(A \cup B) \neq P_{Arby}(A) + P_{Arby}(B).$$

Show how to make Arby go bankrupt, by giving a list of transactions Arby is willing to make that will guarantee that Arby will lose money (you can assume it will be known whether $A$ occurred and whether $B$ occurred the day after any certificates are bought/sold).

**Solution:**
There is 2 cases:
- $P_a(A\cup B) > P_a(A) + P_a(B)$
		In this case, we would sell the $A \cup B$ contract and buy one of $A$ and $B$, as the price of $A + B < A \cup B$ , letting us make risk-free profit.
- $P_a(A \cup B) < P_a(A) + P_a(B)$
		In this case, we would buy the $A\cup B$ contract and sell one of $A$ and $B$, as the price of $A \cup B < A + B$, also allowing arbitrage.

## Inclusion-exclusion

### Problem 49

A fair die is rolled $n$ times. What is the probability that at least 1 of the 6 values never appears?

**Solution:**
$$\begin{align} &P(A_1 \cup A_2 \cup \cdots \cup A_6) \\ &= \sum_{i=1}^{6} P(A_i) - \sum_{1 \leq i < j \leq 6} P(A_i \cap A_j) + \sum_{1 \leq i < j < k \leq 6} P(A_i \cap A_j \cap A_k) \\ &\quad - \cdots + (-1)^{5} P(A_1 \cap A_2 \cap \cdots \cap A_6) \\ &= \binom{6}{1}\left(\frac{5}{6}\right)^n - \binom{6}{2}\left(\frac{4}{6}\right)^n + \binom{6}{3}\left(\frac{3}{6}\right)^n \\ &\quad - \binom{6}{4}\left(\frac{2}{6}\right)^n + \binom{6}{5}\left(\frac{1}{6}\right)^n - \binom{6}{6}\left(\frac{0}{6}\right)^n \end{align}$$

$$\begin{align} P(\text{at least 1 face never appears}) &= 6\left(\frac{5}{6}\right)^n - 15\left(\frac{4}{6}\right)^n + 20\left(\frac{3}{6}\right)^n \\ &\quad - 15\left(\frac{2}{6}\right)^n + 6\left(\frac{1}{6}\right)^n - 0^n \end{align}$$

### Problem 50

A card player is dealt a 13-card hand from a well-shuffled, standard deck of cards. What is the probability that the hand is void in at least one suit ("void in a suit" means having no cards of that suit)?

**Solution:**
$$\begin{align} &P(A_1 \cup A_2 \cup A_3 \cup A_4) \\ &= \binom{4}{1} \cdot \frac{\binom{39}{13}}{\binom{52}{13}} - \binom{4}{2} \cdot \frac{\binom{26}{13}}{\binom{52}{13}} + \binom{4}{3} \cdot \frac{\binom{13}{13}}{\binom{52}{13}} - \binom{4}{4} \cdot 0 \\ &= \frac{4\binom{39}{13} - 6\binom{26}{13} + 4\binom{13}{13}}{\binom{52}{13}} \\ &= \frac{4\binom{39}{13} - 6\binom{26}{13} + 4}{\binom{52}{13}} \end{align}$$

### Problem 51

For a group of 7 people, find the probability that all 4 seasons (winter, spring, summer, fall) occur at least once each among their birthdays, assuming that all seasons are equally likely.

**Solution:**
$$\begin{align} P(A_1 \cup A_2 \cup A_3 \cup A_4) &= \binom{4}{1}\left(\frac{3}{4}\right)^7 - \binom{4}{2}\left(\frac{1}{2}\right)^7 + \binom{4}{3}\left(\frac{1}{4}\right)^7 - \binom{4}{4} \cdot 0 \\ &= 4\left(\frac{3}{4}\right)^7 - 6\left(\frac{1}{2}\right)^7 + 4\left(\frac{1}{4}\right)^7 \end{align}$$
$$\begin{align} P(\text{all 4 seasons occur}) &= 1 - \left[4\left(\frac{3}{4}\right)^7 - 6\left(\frac{1}{2}\right)^7 + 4\left(\frac{1}{4}\right)^7\right] \\ &= 1 - 4\left(\frac{3}{4}\right)^7 + 6\left(\frac{1}{2}\right)^7 - 4\left(\frac{1}{4}\right)^7 \end{align}$$

### Problem 52

A certain class has 20 students, and meets on Mondays and Wednesdays in a classroom with exactly 20 seats. In a certain week, everyone in the class attends both days. On both days, the students choose their seats completely randomly (with one student per seat). Find the probability that no one sits in the same seat on both days of that week.

**Solution:**
$$\begin{align} \frac{D_{20}}{20!} &= \frac{1}{0!} - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \cdots + \frac{1}{20!} \\ &= 1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} - \frac{1}{120} + \frac{1}{720} - \cdots \\ = \frac{1}{e} + \epsilon\end{align}$$

### Problem 53

Fred needs to choose a password for a certain website. Assume that he will choose an 8-character password, and that the legal characters are the lowercase letters a, b, c, ..., z, the uppercase letters A, B, C, ..., Z, and the numbers 0, 1, ..., 9.

**(a)** How many possibilities are there if he is required to have at least one lowercase letter in his password?

**Solution:**
$62^8 - 36^8$

**(b)** How many possibilities are there if he is required to have at least one lowercase letter and at least one uppercase letter in his password?

**Solution:**
$62^8 - 2(36^8) + 10^8$

**(c)** How many possibilities are there if he is required to have at least one lowercase letter, at least one uppercase letter, and at least one number in his password?

**Solution:**
$62^8$ total passwords, $36^8$ no lowercase, $36^8$ no uppercase, $52^8$ no numbers, $10^8$ only numbers, $26^8$ only uppercase, $26^8$ only lower $$\begin{align} &\text{Passwords with at least one of each type} \\ &= 62^8 - (36^8 + 36^8 + 52^8) + (10^8 + 26^8 + 26^8) - 0 \\ &= 62^8 - 2 \cdot 36^8 - 52^8 + 10^8 + 2 \cdot 26^8 \end{align}$$

### Problem 54

Alice attends a small college in which each class meets only once a week. She is deciding between 30 non-overlapping classes. There are 6 classes to choose from for each day of the week, Monday through Friday. Trusting in the benevolence of randomness, Alice decides to register for 7 randomly selected classes out of the 30, with all choices equally likely. What is the probability that she will have classes every day, Monday through Friday? (This problem can be done either directly using the naive definition of probability, or using inclusion-exclusion.)

**Solution:**
$$\begin{align} P(A_1 \cup \cdots \cup A_5) &= \binom{5}{1} \cdot \frac{\binom{24}{7}}{\binom{30}{7}} - \binom{5}{2} \cdot \frac{\binom{18}{7}}{\binom{30}{7}} + \binom{5}{3} \cdot \frac{\binom{12}{7}}{\binom{30}{7}} \\ &= \frac{5\binom{24}{7} - 10\binom{18}{7} + 10\binom{12}{7}}{\binom{30}{7}} \end{align}$$

### Problem 55

A club consists of 10 seniors, 12 juniors, and 15 sophomores. An organizing committee of size 5 is chosen randomly (with all subsets of size 5 equally likely).

**(a)** Find the probability that there are exactly 3 sophomores in the committee.

**Solution:**
$$\frac{\binom{15}{3}\binom{22}{2}}{\binom{37}{5}}$$

**(b)** Find the probability that the committee has at least one representative from each of the senior, junior, and sophomore classes.

**Solution:**
$$\begin{align} P(\text{at least one from each}) &= 1 - \left[\frac{\binom{27}{5} + \binom{25}{5} + \binom{22}{5}}{\binom{37}{5}} - \frac{\binom{15}{5} + \binom{12}{5} + \binom{10}{5}}{\binom{37}{5}}\right] \\ &= \frac{\binom{37}{5} - \binom{27}{5} - \binom{25}{5} - \binom{22}{5} + \binom{15}{5} + \binom{12}{5} + \binom{10}{5}}{\binom{37}{5}} \end{align}$$

## Mixed practice

### Problem 56

For each part, decide whether the blank should be filled in with =, <, or >, and give a clear explanation. In (a) and (b), order doesn't matter.

**(a)** (number of ways to choose 5 people out of 10) _____ (number of ways to choose 6 people out of 10)

**Solution:**
$>$, largest combos when $k$ closest to $\frac{n}{2}$

**(b)** (number of ways to break 10 people into 2 teams of 5) _____ (number of ways to break 10 people into a team of 6 and a team of 4)

**Solution:**
$>$ , $\binom{10}{6} = \binom{10}{4}$, and we already established that closer to $\frac{n}{2}$ is larger.

**(c)** (probability that all 3 people in a group of 3 were born on January 1) _____ (probability that in a group of 3 people, 1 was born on each of January 1, 2, and 3)

**Solution:**
$<$, since there is $3!$ ways to organize $1,2,3$
Martin and Gale play an exciting game of "toss the coin", where they toss a fair coin until the pattern HH occurs (two consecutive Heads) or the pattern TH occurs (Tails followed immediately by Heads). Martin wins the game if and only if HH occurs before TH occurs.

**(d)** (probability that Martin wins) _____ 1/2

**Solution:**
Only way Martin can win is immediately getting $HH$, which happens at $\frac{1}{4}$ .

### Problem 57

Take a deep breath before attempting this problem. In the book Innumeracy [20], John Allen Paulos writes:

Now for better news of a kind of immortal persistence. First, take a deep breath. Assume Shakespeare's account is accurate and Julius Caesar gasped ["Et tu, Brute!"] before breathing his last. What are the chances you just inhaled a molecule which Caesar exhaled in his dying breath?

Assume that one breath of air contains $10^{22}$ molecules, and that there are $10^{44}$ molecules in the atmosphere. (These are slightly simpler numbers than the estimates that Paulos gives; for the purposes of this problem, assume that these are exact. Of course, in reality there are many complications such as different types of molecules in the atmosphere, chemical reactions, variation in lung capacities, etc.)

Suppose that the molecules in the atmosphere now are the same as those in the atmosphere when Caesar was alive, and that in the 2000 years or so since Caesar, these molecules have been scattered completely randomly through the atmosphere. Also assume that Caesar's last breath was sampled without replacement but that your breathing is sampled with replacement (without replacement makes more sense but with replacement is easier to work with, and is a good approximation since the number of molecules in the atmosphere is so much larger than the number of molecules in one breath).

Find the probability that at least one molecule in the breath you just took was shared with Caesar's last breath, and give a simple approximation in terms of $e$.

**Solution:**
Any one molecule not sharing is $(1-10^{-22})$, there is $10^{22}$ molecules, so we have $$(1-10^{-22})^{10^{22}}$$
which is approximately equal to $e^-1$

### Problem 58

A widget inspector inspects 12 widgets and finds that exactly 3 are defective. Unfortunately, the widgets then get all mixed up and the inspector has to find the 3 defective widgets again by testing widgets one by one.

**(a)** Find the probability that the inspector will now have to test at least 9 widgets.

**Solution:**
$$1 - \frac{\binom{8}{3}}{\binom{12}{3}}$$

**(b)** Find the probability that the inspector will now have to test at least 10 widgets.

**Solution:**
$$1 - \frac{\binom{9}{3}}{\binom{12}{3}}$$

### Problem 59

There are 15 chocolate bars and 10 children. In how many ways can the chocolate bars be distributed to the children, in each of the following scenarios?

**(a)** The chocolate bars are fungible (interchangeable).

**Solution:**
$$\binom{24}{9}$$

**(b)** The chocolate bars are fungible, and each child must receive at least one.

**Solution:**
$$\binom{14}{9}$$

**(c)** The chocolate bars are not fungible (it matters which particular bar goes where).

**Solution:**
$$10^{15}$$

**(d)** The chocolate bars are not fungible, and each child must receive at least one.

**Solution:**
$$\sum_{k=1}^{10}(-1)^{k+1}\binom{1}{k}(10-k)^{15}$$

### Problem 60

Given $n \geq 2$ numbers $(a_1, a_2, ..., a_n)$ with no repetitions, a bootstrap sample is a sequence $(x_1, x_2, ..., x_n)$ formed from the $a_j$'s by sampling with replacement with equal probabilities. Bootstrap samples arise in a widely used statistical method known as the bootstrap. For example, if $n = 2$ and $(a_1, a_2) = (3, 1)$, then the possible bootstrap samples are $(3, 3), (3, 1), (1, 3),$ and $(1, 1)$.

**(a)** How many possible bootstrap samples are there for $(a_1, ..., a_n)$?

**Solution:**
$$n^n$$

**(b)** How many possible bootstrap samples are there for $(a_1, ..., a_n)$, if order does not matter (in the sense that it only matters how many times each $a_j$ was chosen, not the order in which they were chosen)?

**Solution:**
$$\binom{n+n-1}{n-1} = \binom{2n-1}{n-1}$$

**(c)** One random bootstrap sample is chosen (by sampling from $a_1, ..., a_n$ with replacement, as described above). Show that not all unordered bootstrap samples (in the sense of (b)) are equally likely. Find an unordered bootstrap sample $b_1$ that is as likely as possible, and an unordered bootstrap sample $b_2$ that is as unlikely as possible. Let $p_1$ be the probability of getting $b_1$ and $p_2$ be the probability of getting $b_2$ (so $p_i$ is the probability of getting the specific unordered bootstrap sample $b_i$). What is $p_1/p_2$? What is the ratio of the probability of getting an unordered bootstrap sample whose probability is $p_1$ to the probability of getting an unordered sample whose probability is $p_2$?

**Solution:**
An unordered bootstrap sample can be represented as $(k_1, k_2, \ldots, k_n)$ where $k_i$ is the number of times $a_i$ appears, and $k_1 + k_2 + \cdots + k_n = n$.

The probability of getting a specific unordered sample $(k_1, k_2, \ldots, k_n)$ is: $$P(k_1, k_2, \ldots, k_n) = \frac{\text{number of ordered sequences with this composition}}{n^n} \times \left(\frac{1}{n}\right)^n$$

The number of ordered sequences is the multinomial coefficient: $\binom{n}{k_1, k_2, \ldots, k_n} = \frac{n!}{k_1! k_2! \cdots k_n!}$

So: $$P(k_1, k_2, \ldots, k_n) = \frac{1}{n^n} \cdot \frac{n!}{k_1! k_2! \cdots k_n!}$$

**Finding the most likely unordered sample ($b_1$):**
To maximize this probability, we need to maximize $\frac{n!}{k_1! k_2! \cdots k_n!}$ subject to $k_1 + k_2 + \cdots + k_n = n$.

This multinomial coefficient is maximized when the $k_i$ values are as equal as possible.
- If $n$ is divisible by $n$: $k_i = 1$ for all $i$ gives the maximum
**Most likely case:** $b_1 = (1, 1, 1, \ldots, 1)$ (each $a_i$ appears exactly once) $$p_1 = \frac{1}{n^n} \cdot \frac{n!}{1! \cdot 1! \cdots 1!} = \frac{n!}{n^n}$$

**Finding the least likely unordered sample ($b_2$):**
The multinomial coefficient is minimized when the $k_i$ values are as unequal as possible.

**Least likely case:** $b_2 = (n, 0, 0, \ldots, 0)$ (all samples are the same value, say $a_1$) $$p_2 = \frac{1}{n^n} \cdot \frac{n!}{n! \cdot 0! \cdots 0!} = \frac{1}{n^n}$$

**Computing the ratio $p_1/p_2$:** $$\frac{p_1}{p_2} = \frac{n!/n^n}{1/n^n} = n!$$
**Computing the ratio of probabilities of getting samples with probability $p_1$ vs $p_2$:**
- Number of unordered samples with probability $p_1$: There's only 1 way to have $(1,1,\ldots,1)$
- Number of unordered samples with probability $p_2$: There are $n$ ways to have $(n,0,\ldots,0)$ (choosing which $a_i$ appears $n$ times)

So the ratio is: $$\frac{1 \times p_1}{n \times p_2} = \frac{p_1}{n \times p_2} = \frac{n!}{n} = (n-1)!$$

### Problem 61

There are 100 passengers lined up to board an airplane with 100 seats (with each seat assigned to one of the passengers). The first passenger in line crazily decides to sit in a randomly chosen seat (with all seats equally likely). Each subsequent passenger takes their assigned seat if available, and otherwise sits in a random available seat. What is the probability that the last passenger in line gets to sit in their assigned seat? (This is a common interview problem, and a beautiful example of the power of symmetry.)

**Solution:**
By symmetry $\frac{1}{2}$ , since the only two seats that matter are seat 1 and seat 100.

Let's look at the trivial cases first:
If first passenger sits in his seat, then everyone sits correctly. If he sits in seat 100, then the last person cannot sit in the correct seat.

Now, say the first passenger sits in some random seat $j$ , at some point there will be a flip between seat 1 and seat 100, where if some other passenger $k$ sits at seat 1, then the last passenger will be correctly seated, and if not then the last passenger won't be.

### Problem 62

In the birthday problem, we assumed that all 365 days of the year are equally likely (and excluded February 29). In reality, some days are slightly more likely as birthdays than others. For example, scientists have long struggled to understand why more babies are born 9 months after a holiday. Let $\mathbf{p} = (p_1, p_2, ..., p_{365})$ be the vector of birthday probabilities, with $p_j$ the probability of being born on the $j$th day of the year (February 29 is still excluded, with no offense intended to Leap Dayers).

The $k$th elementary symmetric polynomial in the variables $x_1, ..., x_n$ is defined by

$$e_k(x_1, ..., x_n) = \sum_{1 \leq j_1 < j_2 < \cdots < j_k \leq n} x_{j_1} \cdots x_{j_k}.$$

This just says to add up all of the $\binom{n}{k}$ terms we can get by choosing and multiplying $k$ of the variables. For example, $e_1(x_1, x_2, x_3) = x_1 + x_2 + x_3$, $e_2(x_1, x_2, x_3) = x_1x_2 + x_1x_3 + x_2x_3$, and $e_3(x_1, x_2, x_3) = x_1x_2x_3$.

Now let $k \geq 2$ be the number of people.

**(a)** Find a simple expression for the probability that there is at least one birthday match, in terms of $\mathbf{p}$ and an elementary symmetric polynomial.

**Solution:**
So we want to take the complement of no collisions. In this case, no collisions is provided by the $kth$ elementary polynomial, as you need to take all $k$ possible combos of birthday probabilities, then summed together, and then multiplied by the $k!$ permutations available. $$P(same) = 1 - k!e_k(p_1,\cdots,p_{365})$$

**(b)** Explain intuitively why it makes sense that $P(\text{at least one birthday match})$ is minimized when $p_j = \frac{1}{365}$ for all $j$, by considering simple and extreme cases.

**Solution:**
The idea is that when $p_j = \frac{1}{365}$, we have minimized the global probability for any collision. The closer $p_j$ approaches 0, the more evenly distributed it is. For example, if we consider the extreme case where $p_j = 1$ , then you are guaranteed to have collisions, and if $p_j = 0$, then are you guaranteed to not have any collisions.

**(c)** The famous arithmetic mean-geometric mean inequality says that for $x, y \geq 0$,

$$\frac{x + y}{2} \geq \sqrt{xy}.$$

This inequality follows from adding $4xy$ to both sides of $x^2 - 2xy + y^2 = (x - y)^2 \geq 0$.

Define $\mathbf{r} = (r_1, ..., r_{365})$ by $r_1 = r_2 = (p_1 + p_2)/2$, $r_j = p_j$ for $3 \leq j \leq 365$. Using the arithmetic mean-geometric mean bound and the fact, which you should verify, that

$$e_k(x_1, ..., x_n) = x_1x_2e_{k-2}(x_3, ..., x_n) + (x_1 + x_2)e_{k-1}(x_3, ..., x_n) + e_k(x_3, ..., x_n),$$

show that

$$P(\text{at least one birthday match}|\mathbf{p}) \geq P(\text{at least one birthday match}|\mathbf{r}),$$

with strict inequality if $\mathbf{p} \neq \mathbf{r}$, where the "given $\mathbf{r}$" notation means that the birthday probabilities are given by $\mathbf{r}$. Using this, show that the value of $\mathbf{p}$ that minimizes the probability of at least one birthday match is given by $p_j = \frac{1}{365}$ for all $j$.

**Solution:**
For $k \geq 2$ and $n \geq 2$: $$e_k(x_1, \ldots, x_n) = x_1x_2e_{k-2}(x_3, \ldots, x_n) + (x_1 + x_2)e_{k-1}(x_3, \ldots, x_n) + e_k(x_3, \ldots, x_n)$$

**Proof:** By definition, $e_k(x_1, \ldots, x_n)$ is the sum of all products of $k$ distinct variables chosen from ${x_1, \ldots, x_n}$.

We partition these terms based on how many of ${x_1, x_2}$ they contain:

**Case 1: Terms containing both $x_1$ and $x_2$**

- Form: $x_1 \cdot x_2 \cdot (\text{product of } k-2 \text{ variables from } {x_3, \ldots, x_n})$
- There are $\binom{n-2}{k-2}$ such terms (choosing $k-2$ from the remaining $n-2$ variables)
- Sum: $x_1x_2 \sum_{\substack{S \subseteq {3,\ldots,n} \ |S| = k-2}} \prod_{j \in S} x_j = x_1x_2 e_{k-2}(x_3, \ldots, x_n)$

**Case 2: Terms containing exactly one of ${x_1, x_2}$**

- Form: $x_i \cdot (\text{product of } k-1 \text{ variables from } {x_3, \ldots, x_n})$ where $i \in {1,2}$
- For $x_1$: there are $\binom{n-2}{k-1}$ terms
- For $x_2$: there are $\binom{n-2}{k-1}$ terms
- Sum: $x_1 \sum_{\substack{S \subseteq {3,\ldots,n} \ |S| = k-1}} \prod_{j \in S} x_j + x_2 \sum_{\substack{S \subseteq {3,\ldots,n} \ |S| = k-1}} \prod_{j \in S} x_j$
- This equals: $(x_1 + x_2) e_{k-1}(x_3, \ldots, x_n)$

**Case 3: Terms containing neither $x_1$ nor $x_2$**

- Form: products of $k$ variables all from ${x_3, \ldots, x_n}$
- There are $\binom{n-2}{k}$ such terms (if $k \leq n-2$, otherwise 0)
- Sum: $\sum_{\substack{S \subseteq {3,\ldots,n} \ |S| = k}} \prod_{j \in S} x_j = e_k(x_3, \ldots, x_n)$

**Verification of Partition:** These three cases are mutually exclusive and exhaustive:

- Every term in $e_k(x_1, \ldots, x_n)$ contains exactly one of: {both $x_1$ and $x_2$}, {exactly one of $x_1, x_2$}, {neither $x_1$ nor $x_2$}
- Total count: $\binom{n-2}{k-2} + 2\binom{n-2}{k-1} + \binom{n-2}{k} = \binom{n}{k}$ ✓

**Therefore:** $$e_k(x_1, \ldots, x_n) = x_1x_2e_{k-2}(x_3, \ldots, x_n) + (x_1 + x_2)e_{k-1}(x_3, \ldots, x_n) + e_k(x_3, \ldots, x_n)$$

From the elementary symmetric polynomial identity and transformation $\mathbf{p} \to \mathbf{r}$:

$$e_k(\mathbf{p}) = p_1p_2e_{k-2}(p_3, \ldots, p_{365}) + (p_1 + p_2)e_{k-1}(p_3, \ldots, p_{365}) + e_k(p_3, \ldots, p_{365})$$

$$e_k(\mathbf{r}) = r_1r_2e_{k-2}(p_3, \ldots, p_{365}) + (r_1 + r_2)e_{k-1}(p_3, \ldots, p_{365}) + e_k(p_3, \ldots, p_{365})$$

Since $r_1 = r_2 = \frac{p_1 + p_2}{2}$:

- $r_1 + r_2 = p_1 + p_2$ (same)
- $r_1r_2 = \left(\frac{p_1 + p_2}{2}\right)^2 \geq p_1p_2$ (by AM-GM)

Therefore: $e_k(\mathbf{r}) \geq e_k(\mathbf{p})$
Since the probability of at least one birthday match is: $$P(\text{at least one match}) = 1 - k! \cdot e_k(\mathbf{p})$$
We have: $$P(\text{at least one match}|\mathbf{p}) = 1 - k! \cdot e_k(\mathbf{p}) \geq 1 - k! \cdot e_k(\mathbf{r}) = P(\text{at least one match}|\mathbf{r})$$
And given $p \neq r$, we have strict inequality.

**To show $p_j = \frac{1}{365}$ is optimal:**
Given that $r \geq p$, and the only case where $r = p$ is when $p1 = p2$, this means that for all $r$ to be equal to $p$, all $p$ must be the same, and that is modeled by $\frac{1}{365}$


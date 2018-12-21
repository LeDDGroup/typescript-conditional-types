export type Extends<A, B, Then = true, Else = false> = A extends B
  ? Then
  : Else;

export type If<Condition, Then, Else> = Extends<Condition, true, Then, Else>;

export type And<A extends boolean, B extends boolean> = Extends<
  A,
  true,
  B,
  false
>;

export type Or<A extends boolean, B extends boolean> = Extends<
  A,
  true,
  true,
  B
>;

export type Not<A extends boolean> = Extends<A, true, false, true>;

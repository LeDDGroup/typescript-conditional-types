import { Extends, If, And, Not, Or } from "./index";

function assert<T extends true>() {}

// Extends
assert<Extends<"A", string>>();
assert<Not<Extends<string, "A">>>();

// And
assert<And<true, true>>();
assert<Not<And<true, false>>>();
assert<Not<And<false, false>>>();
assert<Not<And<false, true>>>();

// Or
assert<Or<true, true>>();
assert<Or<false, true>>();
assert<Or<true, false>>();
assert<Not<Or<false, false>>>();

// If
assert<If<true, true, false>>();
assert<Not<If<true, false, true>>>();

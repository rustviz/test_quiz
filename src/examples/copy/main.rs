/* --- BEGIN Variable Definitions ---
Owner x; Owner y
--- END Variable Definitions --- */
fn main() {
    let x = 5; // !{ Bind(x) }
    let y = x; // !{ GoOutOfScope(x) }
} /* !{
    GoOutOfScope(x),
    GoOutOfScope(y)
} */
---
title: "Welcome to the blog"
tags: [meta]
---

I'm starting this to keep short notes on things I learn — robotics, ML, hardware, whatever's in front of me that week. Mostly for myself; if it's useful to you too, even better.

A couple of things this setup supports out of the box:

**Code blocks** with syntax highlighting:

```python
def step(x, dt):
    return x + dt * dynamics(x)
```

**Inline math** like $\dot{x} = f(x, u)$, and display math:

$$
J(u) = \int_0^T \ell(x(t), u(t))\, dt + \phi(x(T))
$$

New posts are just a new Markdown file in `_posts/`, named `YYYY-MM-DD-title.md`, with a title in the frontmatter up top. Push to `main` and GitHub Pages builds it — no local build step, no CI to babysit.

# Canva staging

Disposable landing zone for exports coming out of Canva. Nothing in this folder
ships, and nothing references it.

## Flow

1. Export from Canva into this folder — any filename, any format.
2. Promote what's needed: optimize it, rename it for use, and commit it under
   `static/images/brand/`. That directory is the canonical, deployed source.
3. Delete the staging copy. Rejected experiments get deleted too.

This folder should normally be empty. It is not an archive: if a past export is
needed again, re-export it from Canva rather than keeping stale copies here.

See `docs/DESIGN.md` §8 (Decisions) for the brand palette and asset rules.

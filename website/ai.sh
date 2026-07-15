prefix="# Plumfield Library

> Plumfield Living Books Library is a private lending library in Denmark, Wisconsin, serving families, educators, and lifelong learners with about 12,000 carefully curated titles centered on truth, goodness, and beauty. We offer book clubs, classes, workshops, and enrichment opportunities, with a branch in Pulaski.

The library grew out of the work surrounding Plumfield Moms and a broader commitment to classical education, living books, and the preservation of literary heritage. Rather than focusing primarily on newly published titles, the collection emphasizes books that have demonstrated lasting worth through decades of readership. Many of these works are out of print, overlooked by modern publishing trends, or unavailable through local libraries.

Plumfield Library exists to remove barriers between readers and these books. By acquiring, cataloging, and lending carefully selected titles, the library provides families, students, homeschoolers, and schools with access to works that might otherwise remain inaccessible. The collection spans literature, history, biography, science, theology, children’s books, and educational resources, with particular attention given to books that cultivate knowledge, imagination, virtue, and a deeper understanding of the human experience.

The library is operated with a stewardship mindset. Resources are directed toward preserving access, maintaining accurate catalog records, and creating practical systems that allow a relatively small organization to serve a growing community. Technology is used to support the mission, not replace it: cataloging, discovery, circulation, and digital tools are developed to make meaningful books easier to find and borrow.

At its heart, Plumfield Library is an effort to preserve and share a body of literature that might otherwise fade from public awareness. Its purpose is not merely to store books, but to connect readers with works that have shaped minds, inspired curiosity, and enriched lives across generations.

The Library is owned and operated by the Masarik Family:

**Sara** is the head librarian and the founder of Plumfield. Her children, **Michael**, **Greta**, and **Jack** all serve various roles in the operation of the library.
- **Michael** handles all IT relating to the Library
- **Greta** runs point on circulation and book recomendation
- **Jack** recomends books to patrons and is the graphic designer for the library and for our press ([Plumfield Press](https://plumfieldpress.com))
"
filepath="./public/llms-full.txt"
echo "Building llms-full.txt"
echo "$prefix" > "$filepath"
for file in ./public/policies/*.md; do
    echo "" >> "$filepath"
    echo "---" >> "$filepath"
    echo "" >> "$filepath"
    sed -E 's/^(#+) /#\1 /' "$file" >> "$filepath"
done

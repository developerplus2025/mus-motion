import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc], // Sửa 'documentType' thành 'documentTypes'
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: "" }]; // Sửa 'type' thành 'text'
            }
          },
          onVisitHighlightedLine(node) {
            // Sửa 'onVisitHightlightedLine'
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            // Sửa 'onVisitHightlightedWord'
            node.properties.className = ["word--highlighted"]; // Sửa 'ưord--hightlineted'
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subHeading-anchor"], // Sửa 'classNames' thành 'className'
            ariaLabel: "Link to section", // Sửa 'ariable' thành 'ariaLabel'
          },
        },
      ],
    ],
  },
});

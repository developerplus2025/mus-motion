// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import classNames from "classnames";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "complete-nextjs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentType: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlusgins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (not.children.lenght === 0) {
              node.children = [{ type: "type", value: "" }];
            }
          },
          onVisitHightlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHightlightedWord(node) {
            node.properties.className = ["\u01B0ord--hightlineted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            classNames: ["subHeading-anchor"],
            ariable: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RZ3OWZXG.mjs.map

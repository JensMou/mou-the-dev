import { remark } from "remark";
import html from "remark-html";

/**
 *
 *
 * @export
 * @param {string} markdown
 * @return {*}
 */
export default async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}

import { useState } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const ProjectBody = ({ content }: Props) => {
  const [modifiedContent, setModifiedContent] = useState<string>(() => {
    let str = content + "";
    const arr = content.match(/<h2>(.*?)<\/h2>/g) ?? [];
    arr.forEach((val) => {
      if (val) {
        const id = val
          .replace("<h2>", "")
          .replace("</h2>", "")
          .replace(" ", "-")
          .toLocaleLowerCase();
        str = str.replace(
          val,
          `<a href="#${id}">${val.replace(
            "<h2>",
            `<h2 class="hover:underline" id="${id}" name="${id}">`
          )}</a>`
        );
      }
    });
    return str;
  });

  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: modifiedContent }}
    />
  );
};

export default ProjectBody;

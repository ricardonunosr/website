import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }: any) {
  return (
    <div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

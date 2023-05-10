import { useState } from "react";

type TagProps = {
  value: string;
  id: number;
};

export const Tags = () => {
  const [tags, setTags] = useState<TagProps[]>([]);
  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: "New",
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

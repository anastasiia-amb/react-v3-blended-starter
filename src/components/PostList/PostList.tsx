import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./PostList.module.css";
import { deletePost } from "../../services/postService";
import { Post } from "../../types/post";

interface PostListProps {
  posts: Post[];
  toggleModal: () => void;
  toggleEdit: (PostToedit?: Post) => void;
}

export default function PostList({ posts, toggleModal, toggleEdit }: PostListProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert("post deleted");
    },
  });
  return (
    <ul className={css.list}>
      {posts.map((post) => (
        <li className={css.listItem} key={post.id}>
          <h2 className={css.title}>{post.title}</h2>
          <p className={css.content}>{post.body}</p>
          <div className={css.footer}>
            <button
              className={css.edit}
              onClick={() => {
                toggleModal();
                toggleEdit(post);
              }}
            >
              Edit{" "}
            </button>
            <button className={css.delete} onClick={() => mutation.mutate(post.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
      {/* список постів, кожен з яких створює наступну розмітку */}
    </ul>
  );
}

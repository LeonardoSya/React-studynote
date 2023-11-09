import { getImageUrl } from "./2.utils";

// 我已经将person和size这两个props从父组件profile中传递过来，因此可以作为子组件avatar的变量了
export default function Avatar({ person, size }) {   // {}是解构 这样就可以在子组件的代码中使用它们，就像使用变量一样
    // 在这里，person和size是可访问的
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );

}
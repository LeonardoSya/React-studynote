function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del> {name + '✔'}</del>
        )
    }
    return (
        <li className='item'>
            {itemContent}
        </li>
    )

}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride 的行李清单</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="宇航服"
                />
                <Item
                    isPacked={true}
                    name="飞船"
                />
                <Item
                    isPacked={false}
                    name="照片"
                />
            </ul>
        </section>
    );
}
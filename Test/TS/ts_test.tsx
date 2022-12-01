const Article = (props: { title: string, content: string, isImportant: boolean, images: string[], tags: string }) => {
    const {
        title,
        content,
        isImportant,
        images,
        tags
    } = props

    const renderTag = (tag: { link: string, title: string }) => (
        <a href={tag.link} key={tag.link}>
            {tag.title}
        </a>
    );

    return (
        <>
            <h2>{title}</h2>
            <div>{content}</div>
            {isImportant && (
                <p>It is important!</p>
            )}
            {images && images.map((item: any, index: number) => (
                <img src={item} key={index} />
            ))}
            {tags && tags.map(item => renderTag(item))}
        </>
    );
}
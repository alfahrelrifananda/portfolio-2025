import Style from "../../style/CardBlog.module.css"

function CardBlog() {
    return (
        <div className={Style.blogCard}>
            <div className={Style.blogFeatured}>
            </div>
            <p className={Style.blogDate}>12 march, 2025</p>
            <p className={Style.blogTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p className={Style.blogDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus enim. Sint, possimus officia repellat ducimus dolorum consequuntur totam hic!</p>
        </div>
    )
}

export default CardBlog
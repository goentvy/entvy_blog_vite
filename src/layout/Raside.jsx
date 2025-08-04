import '../styles/Raside.css'

function RightSideBar({title, content}) {
    return (
        <>
            <div className={title ? `${title} w-full` : "w-full"}>
                {
                    content ? (
                        <div className="r_aside_content_box">
                            <h2 className="r_aside_title cursor">{content.notice}</h2>
                            <p className="r_aside_content">{content.text}</p>
                        </div>
                    ) : (
                        <p>No content available</p>
                    )
                }
            </div>
        </>
    );
}

const Content = [
    {
        title: "r_sidebar_notice", 
        notice: "공지사항",
        text: "풀스택 개발자 양성을 위한 웹 개발 페이지입니다."
    },
    {
        title: "r_sidebar_update",
        notice: "업데이트",
        text: `최근 업데이트: ${new Date().toLocaleDateString()}`
    },
];

function Raside() {
    return (
        <div className="r_aside_wrap flex flex-col align-center justify-center items-center">
            {
                Content.map((item, index,) => (
                    <RightSideBar key={index} title={item.title} content={item} />
                ))
            }
        </div>
    );
}

export default Raside;